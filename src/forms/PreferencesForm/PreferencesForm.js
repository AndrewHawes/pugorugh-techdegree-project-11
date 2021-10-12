import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import axios from 'axios'

import Button from 'components/Button'
import Divider from 'components/Divider'

import CheckboxGroup from 'inputs/CheckboxGroup'
import { S } from './PreferencesForm.styles'
import ErrorMessage from 'components/ErrorMessage'

function PreferencesForm({ initialValues }) {
  const [errorMessage, setErrorMessage] = useState('')
  let history = useHistory()

  const genderOptions = [
    { key: 'Male', value: 'm' },
    { key: 'Female', value: 'f' },
  ]

  const ageOptions = [
    { key: 'Baby', value: 'b' },
    { key: 'Young', value: 'y' },
    { key: 'Adult', value: 'a' },
    { key: 'Senior', value: 's' },
  ]

  const sizeOptions = [
    { key: 'Small', value: 's' },
    { key: 'Medium', value: 'm' },
    { key: 'Large', value: 'l' },
    { key: 'Extra Large', value: 'xl' },
  ]

  const typeOptions = [
    { key: 'Mammal', value: 'm' },
    { key: 'Robot', value: 'r' },
  ]

  const submitData = (data) => {
    axios
      .put('api/user/preferences/', { ...data })
      .then((res) => {
        history.push('/undecided')
      })
      .catch((err) => {
        setErrorMessage('An unexpected error occurred submitting your request.')
      })
  }

  const onSubmit = (values) => {
    let data = {}
    for (const property in values) {
      data[property] = values[property].join()
    }
    submitData(data)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <S.Form>
        {errorMessage && <ErrorMessage type="error">{errorMessage}</ErrorMessage>}
        <CheckboxGroup label="Age" name="age" options={ageOptions} />
        <CheckboxGroup label="Gender" name="gender" options={genderOptions} />
        <CheckboxGroup label="Size" name="size" options={sizeOptions} />
        <CheckboxGroup label="Type" name="type" options={typeOptions} />
        <Divider />
        <Button type="submit">Save</Button>
      </S.Form>
    </Formik>
  )
}

export default PreferencesForm
