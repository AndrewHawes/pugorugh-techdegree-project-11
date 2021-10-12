import styled from 'styled-components'

const ErrorMessage = styled.p`
  width: 50% auto;
  margin-bottom: 1rem;
  text-align: center;
  color: ${(props) => (props.type === 'error' ? 'red' : 'black')};
`

export const S = {
  ErrorMessage,
}
