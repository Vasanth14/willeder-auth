import React from 'react'
import { Checkbox as MantineCheckbox, CheckboxProps as MantineCheckboxProps } from '@mantine/core'
import { InputHTMLAttributes } from 'react'
import './CheckBox.scss'

export type ExtendedCheckboxProps = MantineCheckboxProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string
  }


const Checkbox = ({ label, ...props }: ExtendedCheckboxProps) => {
  if (props.style || props.styles || props.className || props.classNames) {
    throw new Error('Custom styles are not allowed')
  }

  return (
    <MantineCheckbox
      className="custom-checkbox"
      label={label}
      {...props}
    />
  )
}

export default Checkbox // <-- you need this
