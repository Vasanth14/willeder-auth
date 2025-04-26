import { MantineThemeOverride, rem } from '@mantine/core'
import MantineColors from './colors'
import buttonVariants from './button'

export const theme: MantineThemeOverride = {
  focusRing: 'never',
  fontFamily: 'Lato-Light, sans-serif',
  headings: {
    fontFamily: 'Lato-Light',
    fontWeight: 700,
    sizes: {
      h1: { fontSize: rem(64) },
      h2: { fontSize: rem(48) },
      h3: { fontSize: rem(24) },
      h4: { fontSize: rem(20) },
      h5: { fontSize: rem(16) },
      h6: { fontSize: rem(14) },
    },
  },
  colors: MantineColors,
  fontSizes: {
    xxs: rem(12),
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    lg: rem(24),
    xl: rem(48),
    xxl: rem(64),
  },
  components: {
    Input: {
      variants: {},
    },
    Title: {
      styles: (theme) => ({
        root: {
          color: theme.colors.gray[9],
        },
      }),
    },
  },
  radius: {
    xs: rem(6),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
  },
  spacing: {},
  shadows: {
    sm: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  },
  other: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 900,
    },
  },
  breakpoints: {
    xs: rem(480),
    sm: rem(768),
    md: rem(1024),
    lg: rem(1184),
    xl: rem(1440),
  },
}
