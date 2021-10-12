import { Form as frm } from 'formik'
import styled from 'styled-components'

const Login = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled(frm)`
  width: 60%;
  input {
    margin-bottom: 1rem;
  }
`

export const S = {
  Login,
  Form,
}
