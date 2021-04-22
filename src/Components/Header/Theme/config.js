import { themeMaker, themeOptions } from "../../../Helpers/Theme/themeMaker";
import themeColors from "./theme";

const { light, dark } = themeColors;

const headerBackground = themeMaker({
  ...themeOptions("primary", light.background, dark.background)
});
const headerBorderTop = themeMaker({
  ...themeOptions("primary", light.borderTop, dark.borderTop)
});
const headerBorderBottom = themeMaker({
  ...themeOptions("primary", light.borderBottom, dark.borderBottom)
});
export const configuration = {
  headerBackground,
  headerBorderTop,
  headerBorderBottom
};
