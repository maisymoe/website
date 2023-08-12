import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";

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
})
