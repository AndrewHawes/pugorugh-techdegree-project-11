import { useState, useEffect } from 'react'
import axios from 'axios'

import PreferencesForm from 'forms/PreferencesForm'

import { S } from './Preferences.styles'

const Preferences = () => {
  const [userPreferences, setUserPreferences] = useState(null)

  useEffect(() => {
    let isCancelled = false
    const url = 'api/user/preferences/'

    axios
      .get(url)
      .then((res) => {
        if (!isCancelled) {
          const { age, gender, size, type } = res.data
          const data = {
            age: age.split(','),
            gender: gender.split(','),
            size: size.split(','),
            type: type.split(','),
          }
          setUserPreferences(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <S.Preferences>
      <h1>Set Preferences</h1>
      {userPreferences && <PreferencesForm initialValues={userPreferences} />}
    </S.Preferences>
  )
}

export default Preferences
