import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorGrabIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 14.1l-5.7.7c-.4-1.2-2.4-3.7-5.6-4.6.3-1.4 1.2-1.7 2.4-1.5.2 0 .8.3 1.2.4.1.2.4 1 .4 1l.4-.1c-.1-1.1-.5-4.3-.8-7.6-.1-1.2 1.4-1.3 1.7 0 .1.9.6 4.6.6 4.6h.5V2C7.1.8 8.8.7 8.8 2v5.3l.4.1s.6-4 .7-4.8c.1-1.2 1.8-1 1.6.3-.1.9-.7 5-.7 5l.5.1s1-2.9 1.2-3.5c.3-1 1.8-.5 1.4.6-1.3 4.2-1.8 7.6-1.9 9z"/>
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
