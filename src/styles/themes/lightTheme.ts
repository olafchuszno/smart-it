import { DefaultTheme } from "styled-components";
import { colors } from "../constants/colors.ts";

const lightTheme = {
  colors: {
    backgrounds: {
      HeaderTitle: {
        one: colors.green.main,
      }
    },
    text: {
      HeaderTitle: {
        one: colors.white
      }
    }
  }
} as DefaultTheme;

export default lightTheme;