import { ButtonHTMLAttributes } from 'react'
import { ButtonProps } from '@mantine/core'

export type ExtendedButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string
  }

