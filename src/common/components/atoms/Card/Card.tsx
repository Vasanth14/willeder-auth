import React from 'react'
import { Card as MantineCard, CardProps } from '@mantine/core'
import './Card.scss'

const Card: React.FC<CardProps> = ({ ...props }) => {
  return <MantineCard>{props.children}</MantineCard>
}

export default Card
