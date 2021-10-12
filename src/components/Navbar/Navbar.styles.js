import styled from 'styled-components'

const Navbar = styled.header`
  background-color: var(--color-bg-navbar);
  color: var(--color-text-navbar);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;

  nav {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    padding: 0 1rem;
  }

  a {
    color: white;
    opacity: 0.5;
    white-space: nowrap;

    &:hover {
      opacity: 1;
    }
  }
`
const NavGroup = styled.div`
  a {
    margin-left: 1.5rem;
  }
`

export const S = {
  Navbar,
  NavGroup,
}
