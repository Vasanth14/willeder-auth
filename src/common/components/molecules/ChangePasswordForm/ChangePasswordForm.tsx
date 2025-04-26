import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'

import './ChangePasswordForm.scss'

const ChangePasswordForm = ({
  onChange,
  data,
  onSubmit,
}: ChangePasswordFormProps) => {
  return (
    <form className="change-password-form">
      <Input
        placeholder={'Enter current password'}
        onChange={onChange}
        label={'Current Password'}
        value={data.oldPassword}
        type={'password'}
        name='oldPassword'
      />
      <Input
        placeholder={'Enter new password'}
        onChange={onChange}
        label={'New Password'}
        value={data.newPassword}
        type="password"
        name={"newPassword"}
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Reset 
        </Button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
