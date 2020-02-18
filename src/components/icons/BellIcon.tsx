import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BellIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.2 14.5c.7.3 1.7 0 2-.7l-2.7-1.3c-.3.7 0 1.6.7 2zM11.9 2.8c.3-.5.1-1.1-.5-1.3-.5-.3-1.1-.1-1.3.5-.1.1-.1.2-.1.3l1.7.8c.1-.1.1-.2.2-.3zM12 3.9L9.2 2.6c-1.3.1-2.5.7-3 2L4.8 7.4c-.9-.1-2 .7-2.5 1.9v.1l9.1 4.2v-.1c.5-1.2.5-2.5-.2-3.2l1.3-2.8c.5-1.2.3-2.6-.5-3.6z"/>
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
