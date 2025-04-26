import React from 'react'
import Card from 'common/components/atoms/Card'
import './FormLayout.scss'



const FormLayout = ({ children }: formLayout) => {
  return (
    <div className="form-layout">
      <Card>{children}</Card>
    </div>
  )
}

export default FormLayout
