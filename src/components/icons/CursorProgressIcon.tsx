import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorProgressIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm2 0h1v2h-1zm0 5h1v2h-1zm-1-2v1H7v-1zm5 0v1h-2v-1zm-4.942 1.25l.707.707-1.414 1.414-.707-.707zm.677-2.207l-.707.707-1.414-1.414.707-.707zm3.652 3.621l-.707.707-1.415-1.414.707-.707zM11.972 9.75l-.707-.707 1.414-1.414.707.707z"/>
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