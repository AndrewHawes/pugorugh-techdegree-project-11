import { S } from './Checkbox.styles'
import { ReactComponent as Check } from 'assets/icons/check.svg'

const Checkbox = (props) => {
  const { id, text, disabled } = props

  return (
    <S.Checkbox>
      <S.InputWrapper>
        <S.Input type="checkbox" id={id} disabled={disabled} />
        <S.Control>
          <Check fill="currentColor" />
        </S.Control>
      </S.InputWrapper>
      <S.Label>{text}</S.Label>
    </S.Checkbox>
  )
}

export default Checkbox
