import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgrounds: {
        App: {
          one: string
        },
        HeaderTitle: {
          one: string
        },
        FiltersSection: {
          one: string
        },
        UsersTable: {
          one: string,
          two: string,
          three: string,
          four: string,
        },
        DropdownMenu: {
          one: string,
        },
        DropdownLink: {
          one: string,
          two: string
        },
        NavLinks: {
          one: string
        },
        Header: {
          one: string,
        },
        LanguageMenu: {
          one: string
        },
        LoginForm: {
          one: string,
          two: string,
        },
        CollapsibleSection: {
          one: string,
          two: string,
          three: string,
        }
      },

      text: {
        GlobalStyles: {
          one: string,
        }
        HeaderTitle: {
          one: string
        },
        FiltersSection: {
          one: string
        },
        DropdownLink: {
          one: string,
          two: string
        },
        UsersTable: {
          one: string,
          two: string
        },
        NavLinks: {
          one: string
        },
        LanguageMenu: {
          one: string
        },
        LoginForm: {
          one: string
        },
      },

      icon: {
        Burger: {
          one: string
        },
        Close: {
          one: string
        }
      },

      generics: {
        text: {
          Text: {
            one: string
          }
        }
      }
    }
  }

}