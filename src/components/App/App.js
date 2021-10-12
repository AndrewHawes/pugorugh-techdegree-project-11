import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Browse from 'pages/Browse'
import NewDog from 'pages/NewDog'
import Preferences from 'pages/Preferences'
import Login from 'pages/Login'
import Register from 'pages/Register'

import { AuthProvider, useAuth } from 'hooks/useAuth'

import { S } from './App.styles'
import Welcome from 'pages/Welcome'

function App() {
  return (
    <AuthProvider>
      <S.App>
        <Router />
      </S.App>
    </AuthProvider>
  )
}

function Router() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login">{isAuthenticated ? <Redirect to="/undecided" /> : <Login />}</Route>
        <Route path="/register">
          {isAuthenticated ? <Redirect to="/undecided" /> : <Register />}
        </Route>
        <PrivateRoute path="/:filter(liked|disliked|undecided)" component={Browse} />
        <PrivateRoute path="/new" component={NewDog} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  )
}

function PrivateRoute({ component: Component, path }) {
  const { isAuthenticated } = useAuth()
  return <Route path={path}>{!isAuthenticated ? <Redirect to="/login" /> : <Component />}</Route>
}

export default App
