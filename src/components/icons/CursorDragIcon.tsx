import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorDragIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 6.1c.1-.4-.2-.9-.6-1s-.9.2-1 .6l-.2 1.1c-.2-.1-.3-.2-.5-.3l.2-2c0-.4-.3-.8-.7-.9-.5.1-.9.4-.9.8L9.1 6c-.2 0-.5-.1-.7-.1V4.1c0-.4-.4-.8-.8-.8s-.8.4-.8.8v1.7c-.2 0-.4 0-.6.1l-.3-1.5c0-.4-.4-.8-.8-.7-.5.1-.8.5-.7.9l.2 1.6.2 1.8-.7.1-.9-.9c-.6.1-1.4.9-1.1 2.5.5 2 2 3.6 3.9 4.3l6-.9.7-5 .3-2z"/>
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
