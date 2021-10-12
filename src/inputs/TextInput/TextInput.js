import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from 'inputs/TextError'

import { S } from './TextInput.styles'

function TextInput(props) {
  const { label, name, ...rest } = props
  return (
    <S.TextInput>
      <label htmlFor={name}>{label}</label>
      <Field type="text" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </S.TextInput>
  )
}

export default TextInput
