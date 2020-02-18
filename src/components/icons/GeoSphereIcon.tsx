import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const GeoSphereIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 11c-.6 0-1.2-1-1.5-2.4.5-.1 1-.1 1.5-.1s1 0 1.5.1C9.2 12 8.6 13 8 13zm0-3.5c-.6 0-1.1 0-1.6.1 0-.4-.1-.7-.1-1.1h3.5c0 .4 0 .8-.1 1.1-.6-.1-1.1-.1-1.7-.1zM8 3c.6 0 1.2 1 1.5 2.4-.5.1-1 .1-1.5.1s-1 0-1.5-.1C6.8 4 7.4 3 8 3zm0 3.5c.6 0 1.1 0 1.7-.1 0 .3.1.7.1 1.1H6.3c0-.4 0-.7.1-1.1.5.1 1 .1 1.6.1zm-2.7 1H3.1c.1-.7.3-1.3.6-1.9.5.3 1.1.5 1.7.6-.1.4-.1.9-.1 1.3zm0 1c0 .5.1.9.1 1.3-.6.2-1.2.4-1.7.6-.4-.5-.6-1.2-.6-1.9h2.2zm5.4 0h2.2c-.1.7-.3 1.4-.6 1.9-.5-.3-1.1-.5-1.7-.6.1-.4.1-.8.1-1.3zm0-1c0-.4-.1-.9-.1-1.3.7-.2 1.2-.4 1.7-.6.3.6.5 1.2.6 1.9h-2.2zm1.1-2.7c-.4.2-.8.4-1.4.5-.2-.8-.4-1.4-.7-2 .8.3 1.6.8 2.1 1.5zM6.3 3.3c-.3.6-.6 1.2-.7 2-.6-.1-1-.3-1.4-.5.5-.7 1.3-1.2 2.1-1.5zm-2.1 7.9c.4-.2.8-.3 1.4-.4.2.7.4 1.4.7 1.9-.8-.3-1.5-.8-2.1-1.5zm5.5 1.5c.3-.5.5-1.2.7-1.9.5.1 1 .3 1.4.5-.6.6-1.3 1.1-2.1 1.4z"/>
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
