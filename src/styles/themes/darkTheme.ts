import { DefaultTheme } from "styled-components";
import { colors } from "../constants/colors.ts";

const darkTheme = {
  colors: {
    backgrounds: {
      HeaderTitle: {
        one: colors.green.main,
      }
    },
    text: {
      HeaderTitle: {
        one: colors.black.main
      }
    }
  }
} as DefaultTheme;

export default darkTheme;