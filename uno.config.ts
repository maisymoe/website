import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
    presets: [
        presetUno(),
        presetScrollbar(),
        presetWebFonts({
            provider: "google",
            fonts: {
                mono: "JetBrains Mono",
            },
        }),
    ],
    transformers: [transformerVariantGroup()],
    preflights: [
        {
            getCSS: ({ theme }: Record<string, any>) => {
                const preflightRaw = readFileSync(join(__dirname, "src", "res", "css", "preflight.scss"), "utf-8");
                let preflight = preflightRaw;
                const matches = preflightRaw.matchAll(/(theme)[^"]*/g);

                for (const match of matches) {
                    const instance = preflightRaw.substring(match.index!, match.index! + match[0].length).split(".");
                    const [category, property] = instance.slice(1);
                    preflight = preflight.replace(`"${instance.join(".")}"`, theme[category][property]);
                }

                return preflight;
            }
        }
    ],
    theme: {
        colors: {
            // Background
            primary: "#1d2331",
            secondary: "#151b28",
            tertiary: "#0d101b",
            border: "#a0b0b420",

            // Text
            header: "#e9f0f3",
            normal: "#dfe9ed",
            muted: "#bfd4db",

            // Highlights
            accent: "#8080B7",
            "accent-alt": "#5e5db8",
            selection: "#8080B720",
        }
    },
})
