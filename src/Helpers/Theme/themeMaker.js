import theme from "styled-theming";

const themeMaker = options => theme.variants("mode", "kind", options);

const themeOptions = (kind, themeLight, themeDark) => ({
  [kind]: {
    light: themeLight,
    dark: themeDark
  }
});

export { themeMaker, themeOptions };
