import {
  CSSObject,
  ContextStylesParams,
  MantineTheme,
  rem,
} from '@mantine/core'

const buttonVariants: Record<
  PropertyKey,
  (
    theme: MantineTheme,
    params: any,
    context: ContextStylesParams
  ) => Record<string, CSSObject>
> = {
  primary: (theme) => ({
    root: {
      backgroundColor: theme.colors.gray[9],
      color: theme.colors.gray[0],
      height: rem(35),
    },
  }),
  secondary: (theme) => ({
    root: {
      backgroundColor: theme.colors.gray[4],
      color: theme.colors.gray[0],
      height: rem(35),
    },
  }),
  delivered: (theme) => ({
    root: {
      backgroundColor: theme.colors.green[6],
      color: theme.colors.gray[0],
      height: rem(35),
    },
  }),
  shipped: (theme) => ({
    root: {
      backgroundColor: theme.colors.blue[3],
      color: theme.colors.gray[0],
      height: rem(35),
    },
  }),
  notDelivered: (theme) => ({
    root: {
      backgroundColor: theme.colors.red[3],
      color: theme.colors.gray[0],
      height: rem(35),
    },
  }),
}

export default buttonVariants
