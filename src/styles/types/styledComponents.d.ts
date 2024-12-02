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
        }
      },
      text: {
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
        }
      },
      icon: {
        Burger: {
          one: string
        },
        Close: {
          one: string
        }
      }
    }
  }

}