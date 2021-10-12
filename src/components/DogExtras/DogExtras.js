import React from 'react'

import { S } from './DogExtras.styles'

const DogExtras = ({ name, gender, ...dog }) => {
  const extraDetails = {
    catFood: dog.favorite_cat_food,
    frenchFilms: dog.french_films,
    chickenNoises: dog.chicken_noises,
    robot: dog.type === 'r' ? true : false,
    carlSagan: dog.is_carl_sagan,
  }

  const { catFood, frenchFilms, chickenNoises, robot, carlSagan } = extraDetails
  const additionalInfo = Object.values(extraDetails).some((element) => Boolean(element))
  const reflexivePronouns = { male: 'himself', female: 'herself', unknown: 'itself' }
  let rp = 'itself'
  if (additionalInfo) {
    rp = [reflexivePronouns[gender.toLowerCase()]]
  }

  return (
    <S.DogExtras>
      {additionalInfo && (
        <p className="bold">
          Here are some amazing facts about {name} to help you make a decision!
        </p>
      )}
      <div>
        {catFood && (
          <p>
            {name}'s favorite brand of cat food is {catFood}!
          </p>
        )}
        {frenchFilms && <p>{name} loves to watch classy French films!</p>}
        {chickenNoises && (
          <p>
            {name} is a very sensitive individual who sometimes feels the need to express {rp}{' '}
            through interpretive dance and high-pitched chicken noises.
          </p>
        )}
        {robot && (
          <p>
            {name} is a robot! (And possibly a ninja. We didn't ask, but most robots are ninjas.)
          </p>
        )}
        {carlSagan && (
          <p>
            This dog claims to be Carl Sagan. That's great! We don't think anyone would lie about
            something like that, so it's definitely true!
          </p>
        )}
      </div>
    </S.DogExtras>
  )
}

export default DogExtras
