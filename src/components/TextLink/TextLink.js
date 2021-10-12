import React from 'react'

import { S } from './TextLink.styles'

const TextLink = ({ href, text }) => {
  return (
    <S.TextLink to={href}>{text}</S.TextLink>
  )
}

export default TextLink
