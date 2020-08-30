import { merge } from "theme-ui";
import { themePolaroid, ThemePolaroid } from "@shetharp/gatsby-theme-polaroid";
import "typeface-fira-sans";
import "typeface-fira-code";

/**
 * The fonts for this site.
 *
 * "DM Sans" is imported as an npm package `typeface-dm-sans`, allowing it to be self-hosted.
 * Learn more about the Typefaces Project: https://github.com/KyleAMathews/typefaces
 *
 * "DM Mono" is imported with `gatsby-plugin-web-font-loader` from Google Fonts.
 * This plugin can also be used for Adobe Fonts (Typekit).
 */
const fonts: ThemePolaroid["fonts"] = {
  body:
    '"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: `'ff-chambers-sans-web', 'Bahnschrift', 'Roboto', 'Segoe UI', 'San Francisco', 'Helvetica Neue', sans-serif`,
  monospace: '"Fira Code", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * The colors for this site.
 */
const colors: ThemePolaroid["colors"] = {
  primary: themePolaroid.colors.saffron.base,
  secondary: themePolaroid.colors.azure.base,
};

/**
 * The theme overrides for this site.
 *
 * https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
 * https://theme-ui.com/guides/merging-themes/
 */
export const themeSite = merge(themePolaroid, {
  colors,
  fonts,
  fontWeights: {
    body: 300,
    bold: 500,
    heading: 700,
  },
});
export default themeSite;
