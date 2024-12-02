import { DefaultTheme } from "styled-components";
import { colors } from "../constants/colors.ts";

const lightTheme = {
  colors: {
    backgrounds: {
      HeaderTitle: {
        one: colors.green.main,
      },
      FiltersSection: {
        one: colors.green.main,
      },
      UsersTable: {
        two: colors.green.main,
      },
      DropdownMenu: {
        one: colors.white.main,
      }
    },
    text: {
      HeaderTitle: {
        one: colors.white.main
      },
      FiltersSection: {
        one: colors.white.main,
      },
      UsersTable: {
        one: colors.white.main,
      },
    }
  }
} as DefaultTheme;

export default lightTheme;