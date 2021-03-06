import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DotIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="1.5"/>
    </>
  );

  return onlyPath
  ? path
  : (
    <Icon size={size} {...props}>
      {path}
    </Icon>
  );
};
