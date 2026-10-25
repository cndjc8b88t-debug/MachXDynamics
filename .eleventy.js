// Eleventy 3.x configuration for machxdynamics.com.
// Mirrors the FlatSixDynamics site setup: minimal, no JS bundling, no tracker.
// Build output goes to _site/, which GitHub Actions publishes to GitHub Pages.
//
// Source layout:
//   src/                  pages (markdown + njk)
//   src/_layouts/         page templates
//   src/_includes/        partials (header, footer)
//   src/_data/site.json   site-wide values (title, emails, draft flag, ...)
//   src/assets/           static assets (CSS, images); no third-party fonts
//
// PATH_PREFIX: "/" for the custom domain machxdynamics.com (default).
// Only set it to "/<repo-name>/" when serving from the github.io project URL
// without a custom domain.

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

const PATH_PREFIX = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

    return {
        pathPrefix: PATH_PREFIX,
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk", "html"]
    };
}
