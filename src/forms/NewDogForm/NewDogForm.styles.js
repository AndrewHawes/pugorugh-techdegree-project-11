import styled from 'styled-components'
import { Formik as fmk, Form as frm } from 'formik'

const Formik = styled(fmk)``
const Form = styled(frm)`
  display: grid;
  grid-gap: 1rem;
  /* margin-bottom: 100px; */

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-weight: 600;
    font-family: futura-pt, sans-serif;
    /* margin-bottom: 1rem; */
  }

  Button {
    margin-right: auto;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  small {
    margin-bottom: 0.75rem;
  }
`

export const S = {
  Formik,
  Form,
  FormGroup,
}
