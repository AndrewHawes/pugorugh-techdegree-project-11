import { Field, ErrorMessage } from 'formik'

import TextError from 'inputs/TextError'
import { S } from './CheckboxGroup.styles'

function CheckboxGroup({ label, name, options }) {
  const handleChange = (e, field) => {
    const checked = field.value.includes(e.target.value)
    if (!checked || field.value.length > 1) {
      field.onChange(e)
    }
  }
  return (
    <S.CheckboxGroup>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={`${name}-${option.value}`}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  onChange={(e) => handleChange(e, field)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </S.CheckboxGroup>
  )
}

export default CheckboxGroup
