import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useAuth } from 'hooks/useAuth'

const SWelcome = styled.div`
  display: grid;
  grid-template-columns: 60%;
  justify-content: center;
  justify-items: center;
  row-gap: 1.5rem;
`

function Welcome() {
  const { isAuthenticated } = useAuth()
  const loginLink = <Link to="/login">log in</Link>
  const registerLink = <Link to="/register">register</Link>
  const message = isAuthenticated ? (
    <h3>please click the links at the top of the page.</h3>
  ) : (
    <h3>
      please {loginLink} or {registerLink}.
    </h3>
  )

  return (
    <SWelcome>
      <h2>Welcome to Pug or Ugh!</h2>
      <h3>To browse dogs available for adoption or upload your own,</h3>
      {message}
    </SWelcome>
  )
}

export default Welcome
