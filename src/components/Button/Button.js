import { S } from './Button.styles'

const Button = ({ onClick, disabled, type, children }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </S.Button>
  )
}

export default Button
