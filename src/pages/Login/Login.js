import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'
import TextLink from 'components/TextLink'
import TextInput from 'inputs/TextInput'
import { useAuth } from 'hooks/useAuth'

import { S } from './Login.styles'

const Login = () => (
  <S.Login>
    <LoginForm></LoginForm>
  </S.Login>
)

const LoginForm = () => {
  let { login, authError } = useAuth()
  // const history = useHistory()

  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required'),
  })

  const onSubmit = (values) => {
    login(values.username, values.password)
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <S.Form>
        {authError && <ErrorMessage type="error">{authError}</ErrorMessage>}
        <TextInput name="username" placeholder="Username" />
        <TextInput type="password" name="password" placeholder="Password" />
        <div>
          <Button type="submit">Login</Button>
          <TextLink href="/register" text="Register" />
        </div>
      </S.Form>
    </Formik>
  )
}

export default Login
