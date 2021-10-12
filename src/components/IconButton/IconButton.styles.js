import styled from 'styled-components'

const IconButton = styled.div`
  opacity: 0.75;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

export const S = {
  IconButton,
}
