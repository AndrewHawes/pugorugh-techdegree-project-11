import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TextLink = styled(Link)`
  color: var(--color-text-button);
  cursor: pointer;

  font-size: 1rem;
  font-weight: bold;
  margin-left: 1.5rem;

  &:hover {
    color: var(--color-text-button-hover);
    border-color: var(--color-text-button-hover);
  }

  &:disabled {
    color: var(--color-text-button-disabled);
    border-color: var(--color-text-button-disabled);
    cursor: default;
  }
`

export const S = {
  TextLink,
}
