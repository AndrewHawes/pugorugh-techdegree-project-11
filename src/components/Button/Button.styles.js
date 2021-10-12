import styled from 'styled-components'

const Button = styled.button`
  color: var(--color-text-button);
  border: 2px solid var(--color-text-button);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;

  &:not(:first-child) {
    margin-left: 1rem;
  }

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
  Button,
}
