import React from 'react';
import Block from './Block';
import Text from './Text';
import ImageComponent from './ImageComponent';
import {t2} from './theme/fontsize';

const EmptyFile = ({text}) => {
  return (
    <Block center middle>
      <ImageComponent name="empty_icon" height="200" width="200" />
      <Text size={16} semibold margin={[t2, 0, 0]}>
        {text || 'No File'}
      </Text>
    </Block>
  );
};

export default EmptyFile;
