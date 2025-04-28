import { CheckboxProps as MantineCheckboxProps } from '@mantine/core'
import { InputHTMLAttributes } from 'react'

export type ExtendedCheckboxProps = MantineCheckboxProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string
  }
