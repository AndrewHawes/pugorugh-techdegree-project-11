import React from 'react'

import { S } from './DogControls.styles'
import IconButton from 'components/IconButton'

const iconSet = {
  liked: ['disliked', 'undecided'],
  disliked: ['liked', 'undecided'],
  undecided: ['liked', 'disliked'],
}

const iconTooltips = {
  liked: 'Change to liked',
  disliked: 'Change to disliked',
  undecided: 'Change to undecided',
  next: 'Next dog',
  prev: 'Previous dog',
}

const DogControls = ({ status, api }) => {
  const setStatus = {
    liked: api.setLiked,
    disliked: api.setDisliked,
    undecided: api.setUndecided,
  }

  return (
    <S.DogControls>
      <IconButton icon="prev" onClick={api.prev} tooltip={iconTooltips['prev']} />
      {iconSet[status].map((icon) => (
        <IconButton
          icon={icon}
          onClick={setStatus[icon]}
          key={'id_' + icon}
          tooltip={iconTooltips[icon]}
        />
      ))}
      <IconButton icon="next" onClick={api.next} tooltip={iconTooltips['next']} />
    </S.DogControls>
  )
}

export default DogControls
