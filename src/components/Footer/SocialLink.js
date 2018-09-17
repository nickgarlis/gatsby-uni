import React from 'react'
import {Icon} from 'semantic-ui-react'

const SocialLink = ({url, icon}) => {
  if (url) {
    return (
      // TODO: Fix icon hover
      <a href={url} style={{color: 'white'}}>
        <Icon circular name={icon} size='large' />
      </a>
    )
  }
  return null
}

export default SocialLink
