import React from 'react'
import { Field } from 'formik'

const Checkbox = (props) => {
  const { name, label, disabled, isChecked } = props
  return (
    <label htmlFor={name}>
      <Field type="checkbox" name={name} id={name} checked={isChecked} disabled={disabled} />
      {label}
    </label>
  )
}

export default Checkbox
