import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SortIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 4.3V2.5h-2v8.2H9.2l2.8 2.8 2.8-2.8H13V4.3zM7.4 5.2c-.2-.5-.4-1.1-.6-1.5-.2-.5-.4-1-.6-1.4-.2-.5-.4-.9-.6-1.3H4.4c-.2.4-.4.8-.6 1.3-.2.4-.4.9-.6 1.4-.2.4-.4 1-.6 1.5L2 7h1.4c.1-.2.1-.4.2-.6.1-.2.2-.4.2-.7h2.3c.1.2.2.4.2.7.2.2.2.4.3.6H8l-.6-1.8zm-3.3-.6c.1-.3.2-.5.3-.7.1-.2.2-.5.2-.6.1-.3.2-.4.2-.6.1-.1.1-.3.2-.3 0 .1.1.2.1.4.1.1.1.2.2.4s.2.4.2.6c.1.2.2.5.3.7H4.1zM2.8 9v1.1h2.7c-.2.3-.5.6-.7.9-.3.3-.5.7-.8 1.1-.3.4-.5.7-.7 1.1-.2.4-.4.7-.6 1v.8h4.7v-1.1H4.3c.2-.3.4-.7.7-1.1.3-.4.5-.8.8-1.1.3-.4.5-.7.8-1 .3-.3.5-.6.7-.7V9H2.8z"/>
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
