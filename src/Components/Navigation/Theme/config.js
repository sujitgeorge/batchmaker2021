import { themeMaker, themeOptions } from "../../../Helpers/Theme/themeMaker";
import themeColors from "./theme";

const { light, dark } = themeColors;

const tabBarBackground = themeMaker({
  ...themeOptions("primary", light.background, dark.background)
});

export const configuration = {
  tabBarBackground
};
