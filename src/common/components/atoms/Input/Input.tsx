import React, { InputHTMLAttributes } from 'react'
import { TextInput, TextInputProps } from '@mantine/core'
import './Input.scss'

type ExtendedInputProps = TextInputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    variant?: string
  }

const Input = ({ ...props }: ExtendedInputProps) => {
  return <TextInput {...props} />
}

export default Input
