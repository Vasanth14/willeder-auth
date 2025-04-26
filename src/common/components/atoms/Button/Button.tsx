import React from 'react'
import { Button as MantineButton } from '@mantine/core'
import './Button.scss'
import { ReactComponent as DeliverIcon } from 'common/assets/icons/delivered.svg'
import { ReactComponent as CancelIcon } from 'common/assets/icons/cancelled.svg'
import { ReactComponent as NotDeliveredIcon } from 'common/assets/icons/notDelivered.svg'
import { ReactComponent as ShippedIcon } from 'common/assets/icons/shipped.svg'
import { ExtendedButtonProps } from './@types'

const Button = ({ variant = 'primary', ...props }: ExtendedButtonProps) => {
  if (props.style || props.styles || props.className || props.classNames) {
    throw new Error('Custom styles are not allowed')
  }
  const svg = (variant: string) => {
    switch (variant) {
      case 'changetoDeliver':
        return <ShippedIcon />
      case 'changetoPackage':
        return <DeliverIcon />
      case 'changetoCancel':
        return <CancelIcon />
      case 'changetoNotDeliver':
        return <NotDeliveredIcon />
      case 'default':
        return undefined
    }
  }
  return (
    <MantineButton className={`${variant}`} leftIcon={svg(variant)} {...props}>
      {props.children}
    </MantineButton>
  )
}

export default Button
