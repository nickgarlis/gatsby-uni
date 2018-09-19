import React from 'react';
import {Icon} from 'semantic-ui-react';
import {css} from 'glamor';
import {colors} from '../../utils/styles';

const SocialStyle = css({
  color: `${colors.primary}90`,
  ':hover': {
    color: colors.primary,
  },
});

const SocialLink = ({url, icon}) => {
  if (url) {
    return (
      <a href={url} className={SocialStyle}>
        <Icon circular name={icon} size="large" />
      </a>
    );
  }
  return null;
};

export default SocialLink;
