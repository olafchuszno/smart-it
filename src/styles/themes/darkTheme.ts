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
        one: colors.gray.darker.trans[80],
        two: colors.white.darker.trans['90'],
      },
      CollapsibleSection: {
        one: '#eaeaea07',
        two: colors.gray.darker.trans['80'],
        three: colors.gray.darker.trans['80'],
      },
      TextField: {
        one: colors.white.darker.trans['90'],
      }
    },

    text: {
      GlobalStyles: {
        one: colors.white.darker.main,
      },
      HeaderTitle: {
        one: colors.white.darker.main
      },
      DropdownLink: {
        one: colors.green.darker.main,
        two: colors.white.darker.main
      },
      FiltersSection: {
        one: colors.white.darker.main,
      },
      UsersTable: {
        one: colors.white.darker.main,
        two: colors.white.darker.main,
      },
      NavLinks: {
        one: colors.white.darker.main
      },
      LanguageMenu: {
        one: colors.white.darker.main
      },
      LoginForm: {
        one: colors.white.darker.main
      },
      TextField: {
        one: colors.gray.darker.main
      }
    },
    icon: {
      Burger: {
        one: colors.white.darker.main
      },
      Close: {
        one: colors.white.darker.main
      }
    },

    generics: {
      text: {
        Text: {
          one: colors.white.darker.main
        }
      }
    }
  }
} as DefaultTheme;

export default darkTheme;