import React from 'react'
import { Text as MantineText } from '@mantine/core'
import './Text.scss'
import { customTextProps } from './@types'

const Text: React.FC<customTextProps> = ({
  children,
  size = 'sm',
  ...textProps
}) => {
  return (
    <MantineText className={size as string} {...textProps} size={size}>
      {children}
    </MantineText>
  )
}

export default Text
