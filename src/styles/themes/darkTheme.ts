import { DefaultTheme } from "styled-components";
import { colors } from "../constants/colors.ts";

const darkTheme = {
  colors: {
    backgrounds: {
      App: {
        one: colors.green.dark,
      },
      HeaderTitle: {
        one: colors.gray.darker.main,
      },
      FiltersSection: {
        one: colors.gray.darker.main,
      },
      UsersTable: {
        two: colors.gray.darker.main,
        three: colors.gray.darker.trans['30'],
      },
      DropdownMenu: {
        one: colors.green.dark,
      },
      DropdownLink: {
        one: colors.green.trans['20'],
        two: 'transparent'
      },
      NavLinks: {
        one: colors.gray.darker.main
      },
      Header: {
        one: colors.green.dark,
      },
      LanguageMenu: {
        one: colors.gray.darker.main
      },
      LoginForm: {
        one: colors.gray.darker.main,
      }
    },
    text: {
      GlobalStyles: {
        one: colors.white.darker,
      },
      HeaderTitle: {
        one: colors.white.darker
      },
      DropdownLink: {
        one: colors.green.darker.main,
        two: colors.white.darker
      },
      FiltersSection: {
        one: colors.white.darker,
      },
      UsersTable: {
        one: colors.white.darker,
        two: colors.white.darker,
      },
      NavLinks: {
        one: colors.white.darker
      },
      LanguageMenu: {
        one: colors.white.darker
      },
    },
    icon: {
      Burger: {
        one: colors.white.darker
      },
      Close: {
        one: colors.white.darker
      }
    }
  }
} as DefaultTheme;

export default darkTheme;