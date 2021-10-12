import { Link, NavLink } from 'react-router-dom'

import { S } from './Navbar.styles'
import { useAuth } from 'hooks/useAuth'

import logo from 'assets/img/logo.svg'

const linkStyles = {
  color: 'white',
  opacity: '1',
}

const Navbar = () => {
  let { isAuthenticated, logout, username } = useAuth()

  function handleLogout() {
    logout()
  }

  return (
    <S.Navbar>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="Pug or Ugh Logo" height="60" />
          </Link>
          {isAuthenticated && (
            <Link to="/" onClick={handleLogout}>
              Log out {username}
            </Link>
          )}
        </div>
        <S.NavGroup>{isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}</S.NavGroup>
      </nav>
    </S.Navbar>
  )
}

const SignedInLinks = () => (
  <>
    <NavLink to="/liked" activeStyle={linkStyles}>
      Liked
    </NavLink>
    <NavLink to="/undecided" activeStyle={linkStyles}>
      Undecided
    </NavLink>
    <NavLink to="/disliked" activeStyle={linkStyles}>
      Disliked
    </NavLink>
    <NavLink to="/new" activeStyle={linkStyles}>
      Add New Dog
    </NavLink>
  </>
)

const SignedOutLinks = () => (
  <>
    <NavLink to="/login" activeStyle={linkStyles}>
      Log in
    </NavLink>
    <NavLink to="/register" activeStyle={linkStyles}>
      Register
    </NavLink>
  </>
)

export default Navbar
