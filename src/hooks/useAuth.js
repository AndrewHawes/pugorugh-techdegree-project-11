import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }
  return context
}

function useProvideAuth() {
  const [isAuthenticated, setAuthenticated] = useState(loggedIn())
  const [authError, setAuthError] = useState(null)
  const [username, setUsername] = useState(getUsername())

  async function login(username, password) {
    const url = '/api/user/login/'
    const body = { username, password }
    try {
      const response = await axios.post(url, body)
      loginSuccess(response.data, username)
    } catch (error) {
      loginFail(error)
    }
  }

  async function register(username, password) {
    const url = '/api/user/'
    const body = { username, password }
    try {
      await axios.post(url, body)
      return await login(username, password)
    } catch (error) {
      registerFail(error)
    }
  }

  function loginSuccess(data, username) {
    localStorage.username = username
    localStorage.token = data.token
    setAxiosHeader(data.token)
    setUsername(username)
    setAuthError(null)
    setAuthenticated(true)
  }

  function setAxiosHeader(token) {
    axios.defaults.headers.common['Authorization'] = getAuthHeader(token)
  }

  function unsetAxiosHeader() {
    delete axios.defaults.headers.common['Authorization']
  }

  function loginFail(error) {
    localStorage.clear()
    let errorMessages = []
    if (error?.response?.status === 400) {
      errorMessages.push('Incorrect username or password.')
    } else {
      errorMessages.push('An unexpected error has occurred.')
    }
    console.log(error)
    logout(errorMessages)
  }

  function registerFail(error) {
    let errorMessages = []
    const errorFields = error?.response?.data
    if (errorFields) {
      if (errorFields.username) {
        errorMessages.push(...errorFields.username)
      }
      if (errorFields.password) {
        errorMessages.push(...errorFields.password)
      }
    } else {
      errorMessages.push('An unexpected error has occurred.')
    }
    logout(errorMessages)
  }

  function logout(errorMessages = null) {
    localStorage.clear()
    setAuthError(errorMessages)
    unsetAxiosHeader()
    setUsername('')
    setAuthenticated(false)
  }

  function loggedIn() {
    if (Boolean(localStorage.token)) {
      setAxiosHeader(localStorage.token)
      return true
    }
    return false
  }

  function getAuthHeader(token) {
    const authToken = token ? token : localStorage.token
    return 'Token ' + authToken
  }

  function getUsername() {
    return localStorage.username || ''
  }

  return { isAuthenticated, authError, login, logout, register, username }
}

export { AuthProvider, useAuth }
