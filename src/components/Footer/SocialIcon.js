import React from 'react';
import {Icon} from 'semantic-ui-react';
import {css} from 'glamor';
import {colors} from '../../utils/styles';

const SocialIconStyle = css({
  color: `${colors.primary}90`,
  ':hover': {
    color: colors.primary,
  },
});

const SocialIcon = ({url, icon}) => {
  if (url) {
    return (
      <a href={url} className={SocialIconStyle}>
        <Icon circular name={icon} size="large" />
      </a>
    );
  }
  return null;
};

export default SocialIcon;
