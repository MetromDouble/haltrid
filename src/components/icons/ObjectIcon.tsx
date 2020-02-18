import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ObjectIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 12v-2c0-.6-.3-1.1-.7-1.5.4-.4.7-.9.7-1.5V5c0-.6.4-1 1-1V3c-1.1 0-2 .9-2 2v2c0 .6-.4 1-1 1v1c.6 0 1 .4 1 1v2c0 1.1.9 2 2 2v-1c-.6 0-1-.4-1-1zm11-5V5c0-1.1-.9-2-2-2v1c.6 0 1 .4 1 1v2c0 .6.3 1.1.7 1.5-.4.4-.7.9-.7 1.5v2c0 .6-.4 1-1 1v1c1.1 0 2-.9 2-2v-2c0-.6.4-1 1-1V8c-.6 0-1-.4-1-1z"/><circle cx="5" cy="9" r="1"/><circle cx="8" cy="9" r="1"/><circle cx="11" cy="9" r="1"/>
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
