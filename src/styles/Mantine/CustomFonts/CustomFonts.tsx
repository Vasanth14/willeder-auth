import React from 'react'
import { Global } from '@mantine/core'
import bold from '../../../common/assets/fonts/Lato/Lato-Bold.woff2'
import regular from '../../../common/assets/fonts/Lato/Lato-Regular.woff2'
import light from '../../../common/assets/fonts/Lato/Lato-Thin.woff2'

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Lato-Light',
            src: `url('${light}') format("woff2")`,
            fontWeight: 100,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato-Regular',
            src: `url('${regular}') format("woff2")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato-Regular',
            src: `url('${regular}') format("woff2")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato-SemiBold',
            src: `url('${bold}') format("woff2")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato-Bold',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 900,
          },
        },
      ]}
    />
  )
}

export default CustomFonts
