import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'
import TextLink from 'components/TextLink'
import TextInput from 'inputs/TextInput'
import { useAuth } from 'hooks/useAuth'

import { S } from './Register.styles'

const Register = () => (
  <S.Register>
    <RegisterForm></RegisterForm>
  </S.Register>
)

const RegisterForm = () => {
  let { register, authError } = useAuth()

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Please confirm password'),
  })

  const onSubmit = (values) => {
    register(values.username, values.password)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <S.Form>
        {authError && authError.map((msg) => <ErrorMessage type="error">{msg}</ErrorMessage>)}
        <TextInput name="username" placeholder="Username" />
        <TextInput type="password" name="password" placeholder="Password" />
        <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" />
        <div>
          <Button type="submit">Register</Button>
          <TextLink href="/login" text="Login" />
        </div>
      </S.Form>
    </Formik>
  )
}

export default Register
