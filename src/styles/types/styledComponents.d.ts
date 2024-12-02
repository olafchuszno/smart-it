import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgrounds: {
        HeaderTitle: {
          one: string
        },
        FiltersSection: {
          one: string
        },
        UsersTable: {
          one: string,
          two: string;
        },
        DropdownMenu: {
          one: string,
        }
      },
      text: {
        HeaderTitle: {
          one: string
        },
        FiltersSection: {
          one: string
        },
        UsersTable: {
          one: string,
        },
      }
    }
  }

}