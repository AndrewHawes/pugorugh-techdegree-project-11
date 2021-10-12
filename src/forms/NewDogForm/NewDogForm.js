import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

import RadioGroup from 'inputs/RadioGroup'
import TextInput from 'inputs/TextInput'
import Checkbox from 'inputs/Checkbox'

import { S } from './NewDogForm.styles'
import Button from 'components/Button'
import Message from 'components/ErrorMessage'

function NewDogForm() {
  const [errorMessage, setErrorMessage] = useState('')
  const url = 'api/dog/new/'
  let history = useHistory()

  const genderOptions = [
    { key: 'Male', value: 'm' },
    { key: 'Female', value: 'f' },
    { key: 'Unknown', value: 'u' },
  ]

  const sizeOptions = [
    { key: 'Small', value: 's' },
    { key: 'Medium', value: 'm' },
    { key: 'Large', value: 'l' },
    { key: 'Extra Large', value: 'xl' },
    { key: 'Unknown', value: 'u' },
  ]

  const initialValues = {
    name: '',
    breed: '',
    age: '',
    gender: 'u',
    size: 'u',
    image: null,
    favorite_cat_food: '',
    french_films: false,
    chicken_noises: false,
    is_robot: false,
    is_carl_sagan: false,
  }
  const labels = {
    image: 'Please upload a photo',
    age: 'Age (in months)',
    favorite_cat_food: 'Favorite brand of cat food',
    french_films: 'Likes classy French films',
    chicken_noises:
      'Is unafraid to express its feelings through interpretive ' +
      'dance and high-pitched chicken noises',
    is_robot: 'Is actually a robot',
    is_carl_sagan: 'Is Carl Sagan',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required').trim(),
    breed: Yup.string().required('Required').trim(),
    age: Yup.number().required('Required'),
    gender: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
  })

  const axiosPost = (formData) => {
    axios
      .post(url, formData)
      .then((res) => {
        setErrorMessage('')
        history.push('/undecided')
      })
      .catch((err) => {
        setErrorMessage('An unexpected error occurred. Please check your entries and try again.')
        console.log('NewDogForm Error:', err)
      })
  }

  const createFormData = (values) => {
    let formData = new FormData()

    for (const property in values) {
      formData.append(property, values[property])
    }

    return formData
  }

  const onSubmit = (values) => {
    values['image_filename'] = values.image.name
    values['type'] = values.is_robot ? 'r' : 'm'
    let formData = createFormData(values)
    axiosPost(formData)
  }

  return (
    <S.Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <S.Form>
          {errorMessage && <Message type="error">{errorMessage}</Message>}
          <h1>New Dog Registration</h1>
          <div>
            <p>Please upload a photo of the dog:</p>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue('image', e.currentTarget.files[0])
              }}
              required
            />
          </div>
          <TextInput name="name" placeholder="Name" />
          <TextInput name="breed" placeholder="Breed" />
          <TextInput type="number" name="age" placeholder={labels.age} />
          <RadioGroup label="Gender:" name="gender" options={genderOptions} />
          <RadioGroup label="Size:" name="size" options={sizeOptions} />

          <div>
            <p>Optional information:</p>
            <small>
              This information is optional, but the more information we have, the better chance we
              have of finding this dog a new home!
            </small>
          </div>
          <TextInput type="text" name="favorite_cat_food" placeholder={labels.favorite_cat_food} />
          <S.FormGroup>
            <Checkbox label={labels.french_films} name="french_films" />
            <Checkbox label={labels.chicken_noises} name="chicken_noises" />
            <Checkbox label={labels.is_robot} name="is_robot" />
            <Checkbox label="Is from the future (we're just curious)" name="from_future" />
            <Checkbox label={labels.is_carl_sagan} name="is_carl_sagan" />
          </S.FormGroup>
          <div>
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              onClick={() => {
                history.push('/undecided')
              }}
            >
              Cancel
            </Button>
          </div>
        </S.Form>
      )}
    </S.Formik>
  )
}

export default NewDogForm
