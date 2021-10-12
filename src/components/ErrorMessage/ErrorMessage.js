import { S } from './ErrorMessage.styles'

const ErrorMessage = (props) => {
  return <S.ErrorMessage type={props.type || ''}>{props.children}</S.ErrorMessage>
}

export default ErrorMessage
