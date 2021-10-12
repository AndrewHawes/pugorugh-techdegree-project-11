import PropTypes from 'prop-types'

import { S } from './IconButton.styles'

import { ReactComponent as Liked } from 'assets/icons/liked.svg'
import { ReactComponent as Disliked } from 'assets/icons/disliked.svg'
import { ReactComponent as Undecided } from 'assets/icons/undecided.svg'
import { ReactComponent as Next } from 'assets/icons/next.svg'
import { ReactComponent as Prev } from 'assets/icons/prev.svg'

const icons = {
  liked: Liked,
  disliked: Disliked,
  undecided: Undecided,
  next: Next,
  prev: Prev,
}
const IconButton = ({ icon, onClick, tooltip }) => {
  const Icon = icons[icon]

  return (
    <S.IconButton onClick={onClick} title={tooltip}>
      <Icon />
    </S.IconButton>
  )
}

export default IconButton

IconButton.propTypes = {
  icon: PropTypes.oneOf(['liked', 'disliked', 'undecided', 'next', 'prev']),
}
