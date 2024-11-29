import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgrounds: {
        HeaderTitle: {
          one: string
        }
      }
      text: {
        HeaderTitle: {
          one: string
        }
      }
    }
  }

}