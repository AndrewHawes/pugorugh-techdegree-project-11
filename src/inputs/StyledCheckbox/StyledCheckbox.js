import React from 'react'
import { useField, ErrorMessage } from 'formik'
import TextError from 'inputs/TextError'

import { S } from './StyledCheckbox.styles'
import { ReactComponent as Check } from 'assets/icons/check.svg'

const StyledCheckbox = (props) => {
  const [field] = useField(props)
  const { name, label, disabled } = props
  return (
    <>
      <S.StyledCheckbox>
        <S.InputWrapper>
          <S.Input type="checkbox" name={name} id={name} disabled={disabled} {...field} />
          Styled{' '}
          <S.Control>
            <Check fill="currentColor" />
          </S.Control>
        </S.InputWrapper>
        <S.Label htmlFor={name}>{label}</S.Label>
      </S.StyledCheckbox>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default StyledCheckbox
