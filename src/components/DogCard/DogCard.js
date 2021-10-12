import React from 'react'

import { S } from './DogCard.styles'

const DogCard = ({ name, image, breed, age, gender, size }) => {
  const genders = {
    m: 'Male',
    f: 'Female',
    u: 'Gender Unknown',
  }
  const sizes = {
    s: 'Small',
    m: 'Medium',
    l: 'Large',
    xl: 'Extra Large',
    u: 'Size Unknown',
  }
  return (
    <S.DogCard className="DogCard">
      <S.DogCardHeader>{name}</S.DogCardHeader>
      <div>
        <img src={image} alt={name} />
      </div>
      <S.DogCardFooter>
        <span>{breed}</span>
        <span>&bull;</span>
        <span>{age} Months</span>
        <span>&bull;</span>
        <span>{genders[gender]}</span>
        <span>&bull;</span>
        <span>{sizes[size]}</span>
      </S.DogCardFooter>
    </S.DogCard>
  )
}

export default DogCard
