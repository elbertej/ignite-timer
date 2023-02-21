import { defaultTheme } from './../styles/themes/default'
import 'styled-components'

type ThemeType = typeof defaultTheme

// cria uma tipagem para o module styled-components, e toda vez que ele for importado
// a tipagem dele será sobrescrita pela definida aqui
declare module 'styeled-components' {
  export interface DefaultTheme extends ThemeType {}
}
