import getRSS, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async () => await getRSS({
    title: "The Room of Rain",
    description: "maisy's blog - a rainy place for rambling, coding and more.",
    site: new URL("blog/", import.meta.env.SITE).href,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.mdx")),
});
