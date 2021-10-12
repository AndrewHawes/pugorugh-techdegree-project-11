import { Field, ErrorMessage } from 'formik'
import TextError from 'inputs/TextError'

import { S } from './RadioGroup.styles'

function RadioGroup(props) {
  const { label, name, options, ...rest } = props

  return (
    <S.RadioGroup>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </S.RadioGroup>
  )
}

export default RadioGroup
