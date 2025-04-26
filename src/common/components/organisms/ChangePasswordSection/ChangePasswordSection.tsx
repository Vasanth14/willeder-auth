import React from 'react'
import { Title } from '@mantine/core'
import ChangePasswordForm from 'common/components/molecules/ChangePasswordForm'

const ChangePasswordSection = ({
  title,
  data,
  onChange,
  onSubmit,
}: ChangePasswordSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <ChangePasswordForm
        data={data}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </section>
  )
}

export default ChangePasswordSection
