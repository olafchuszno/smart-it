import { DefaultTheme } from "styled-components";
import { colors } from "../constants/colors.ts";

const lightTheme = {
  colors: {
    backgrounds: {
      App: {
        one: colors.white.main
      },
      DropdownLink: {
        one: colors.green.trans['20'],
        two: 'transparent'
      },
      HeaderTitle: {
        one: colors.green.main,
      },
      FiltersSection: {
        one: colors.green.main,
      },
      UsersTable: {
        one: colors.gray.darker.main,
        two: colors.green.main,
        three: colors.green.darker.trans['10'],
        four: colors.gray.lighter
      },
      DropdownMenu: {
        one: colors.white.main,
      },
      NavLinks: {
        one: colors.white.main
      },
      Header: {
        one: colors.white.main,
      },
      LanguageMenu: {
        one: colors.white.main
      },
    },
    text: {
      HeaderTitle: {
        one: colors.white.main
      },
      DropdownLink: {
        one: colors.green.main,
        two: colors.gray.darker.main
      },
      FiltersSection: {
        one: colors.white.main,
      },
      UsersTable: {
        one: colors.black.main,
        two: colors.white.main,
      },
      NavLinks: {
        one: colors.black.main
      },
      LanguageMenu: {
        one: colors.black.main
      },
    },
    icon: {
      Burger: {
        one: colors.black.main
      },
      Close: {
        one: colors.black.main
      }
    }
  }
} as DefaultTheme;

export default lightTheme;