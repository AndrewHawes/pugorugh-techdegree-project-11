import styled from 'styled-components'

const DogCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  text-align: center;
  max-width: 60%;
`

const DogCardHeader = styled.header`
  font-size: 4rem;
  font-family: 'Amatic SC';
  font-weight: bold;
`

const DogCardFooter = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
  font-weight: bold;
`

export const S = {
  DogCard,
  DogCardHeader,
  DogCardFooter,
}
