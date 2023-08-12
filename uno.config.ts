import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Inter",
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
            primary: "#373446",
            secondary: "#2E2B3B",
            tertiary: "#25222F",

            // Text
            header: "#FAFAFF",
            normal: "#EEF0F2",
            muted: "#DADDD8",

            // Highlights
            accent: "#a0b0b4",
            "accent-alt": "#86b8c4",
            selection: "#86b8c430",
            red: "#f16b78",
        }
    },
})
