import React from 'react';
import { getIconType } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';
import type { FCCWD, IconComponentProps, IconType } from '../../types';

type IconProps = {
    type: IconType,
} & IconComponentProps;

const Icon:FCCWD<IconProps> = ({ testID, type, ...props }) => {
  const IconComponent = getIconType(type || 'ionicons');

  return (
    <IconComponent testID={testID} {...props} />
  );
};

export default applyDefaults(Icon);
