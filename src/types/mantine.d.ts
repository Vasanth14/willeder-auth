import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = DefaultMantineColor | 'purple'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }

  export interface MantineThemeOther {
    fontWeight: {
      thin?: number
      extraLight?: number
      light?: number
      normal?: number
      medium?: number
      semiBold?: number
      bold?: number
      extraBold?: number
      black?: number
      extraBlack?: number
    }
  }
}
