import styled from 'styled-components'
import { Form } from 'formik'

const PreferencesForm = styled.div``

const SForm = styled(Form)`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 1rem;
  }

  button {
    margin-right: auto;
  }
`

export const S = {
  PreferencesForm,
  Form: SForm,
}

