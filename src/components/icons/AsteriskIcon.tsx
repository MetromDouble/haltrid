import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AsteriskIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 5c-.3-.4-.6-.7-1-1-.6.5-1.3 1-2 1.7 0-1-.1-1.9-.2-2.7H8c-.2 0-.5 0-.7.1-.1.7-.2 1.6-.2 2.6C6.3 5 5.6 4.5 5 4c-.4.3-.7.6-1 1 .5.6 1 1.3 1.7 2-1 0-1.9.1-2.7.2V8c0 .2 0 .5.1.7.7.1 1.6.2 2.7.2C5 9.7 4.5 10.4 4 11c.3.4.6.7 1 1 .6-.5 1.3-1 2-1.7 0 1 .1 1.9.2 2.7H8c.2 0 .5 0 .7-.1.1-.7.2-1.6.2-2.7.7.7 1.4 1.3 2 1.7.4-.3.7-.6 1-1-.5-.6-1-1.3-1.7-2 1 0 1.9-.1 2.7-.2.1-.2.1-.5.1-.7s0-.5-.1-.7c-.7-.1-1.6-.2-2.7-.2.8-.8 1.3-1.5 1.8-2.1z"/>
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
