import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';
import { NotAllowedIcon } from 'src/components/icons/NotAllowedIcon';
import { ZoomInIcon } from 'src/components/icons/ZoomInIcon';
import { ZoomOutIcon } from 'src/components/icons/ZoomOutIcon';

type ComboType =
  'none' |
  'default' |
  'context-menu' |
  'help' |
  'pointer' |
  'progress' |
  'wait' |
  'cell' |
  'crosshair' |
  'text' |
  'vertical-text' |
  'alias' |
  'copy' |
  'move' |
  'not-allowed' |
  'col-resize' |
  'row-resize' |
  'n-resize' |
  'ne-resize' |
  'e-resize' |
  'se-resize' |
  's-resize' |
  'sw-resize' |
  'w-resize' |
  'nw-resize' |
  'ew-resize' |
  'ns-resize' |
  'nesw-resize' |
  'nwse-resize' |
  'zoom-in' |
  'zoom-out' |
  'grab' |
  'grabbing';

type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'none': (<><path d="M12.3 2L9.1 5.1 6 2v6.3l-3.6 3.6.7.7L13 2.7zm1.7 8l-3.3-3.3L6 11.3V13l2.4-2.4 1.5 3.8 1.9-.7-1.5-3.7z" /></>),
  'default': (<><path d="M12 10L4 2v11l2.4-2.4 1.5 3.8 1.9-.7L8.3 10z" /></>),
  'context-menu': (<><path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm0 1h5v1H8zm0 2h5v1H8zm0 2h5v1H8z" /></>),
  'help': (<><circle cx="10" cy="12.847" r=".8" /><path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm1 2c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1h-.5v1.5h1v-.6c.9-.2 1.5-1 1.5-1.9 0-1.1-.9-2-2-2s-2 .9-2 2h1z" /></>),
  'pointer': (<><path d="M11.9 6v2H11V6c0-.8-.5-1.2-1.1-1v3H9V6c0-.8-.6-1.2-1.1-1v3H7V2c0-.6-.4-1-1-1s-1 .4-1 1v8.6L3.3 8.4c-.3-.4-.9-.5-1.4-.2-.4.3-.6.9-.2 1.4l3.5 4.3c.5.7 1.3 1.1 2.2 1.1h3.9l.7-1.8c.7-1.6 1-3.3 1-5V7c0-.7-.5-1.2-1.1-1zM7 14l-1-3h1v3zm1.5.5L8 11h1l-.5 3.5zM10 14v-3h1l-1 3z" /></>),
  'progress': (<><path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm2 0h1v2h-1zm0 5h1v2h-1zm-1-2v1H7v-1zm5 0v1h-2v-1zm-4.942 1.25l.707.707-1.414 1.414-.707-.707zm.677-2.207l-.707.707-1.414-1.414.707-.707zm3.652 3.621l-.707.707-1.415-1.414.707-.707zM11.972 9.75l-.707-.707 1.414-1.414.707.707z" /></>),
  'wait': (<><path d="M8 5.5c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM8 14c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5zM2 8c0-.4.3-.8.7-.8h2.5c.5.1.8.4.8.8s-.3.7-.7.7H2.7c-.4.1-.7-.3-.7-.7zm8 0c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5zM3.7 3.7c.3-.3.8-.3 1.1 0l1.8 1.8c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L3.7 4.8c-.3-.3-.3-.8 0-1.1zm5.8 5.9c.2-.2.5-.2.7 0l2.1 2.1c.2.2.2.5 0 .7-.2.2-.5.2-.7 0l-2.1-2.1c-.2-.1-.2-.5 0-.7zm-3-.1c.3.3.3.7 0 1l-1.8 1.8c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1l1.8-1.8c.3-.3.8-.3 1 0zm6.1-5.9c.2.2.2.5 0 .7l-2.1 2.1c-.2.2-.5.2-.7 0-.2-.1-.2-.4 0-.6l2.1-2.1c.2-.2.5-.2.7-.1z" /></>),
  'cell': (<><path d="M13.1 5.5h-2.6v-3h-5v3h-3v5h3v2.6l.9.9H11v-3h3V6.4l-.9-.9zm-.6 4h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3z" /></>),
  'crosshair': (<><path d="M13.5 7.5h-5v-5h-1v5h-5v1h5v5h1v-5h5z" /></>),
  'text': (<><path d="M8 4c0-.6.4-1 1-1V2c-.6 0-1.1.3-1.5.7C7.1 2.3 6.6 2 6 2v1c.6 0 1 .4 1 1v4.1c-.4.2-.7.6-.7 1.2s.3.9.8 1.1v2.3c0 .6-.4 1-1 1v1c.6 0 1.1-.3 1.5-.7.4.4.9.7 1.5.7v-1c-.6 0-1-.4-1-1v-2.3c.4-.2.8-.6.8-1.1s-.5-1-.9-1.2V4z" /></>),
  'vertical-text': (<><path d="M4.3 7.9c-.6 0-1-.4-1-1h-1c0 .6.2 1.1.7 1.5-.5.3-.7.9-.7 1.5h1c0-.6.4-1 1-1h4.1c.2.4.6.7 1.1.7s.9-.3 1.1-.8H13c.6 0 1 .4 1 1h1c0-.6-.3-1.1-.7-1.5.4-.3.7-.8.7-1.4h-1c0 .6-.4 1-1 1h-2.3c-.2-.5-.7-.8-1.2-.8s-.9.3-1.1.8H4.3z" /></>),
  'alias': (<><path d="M11.3 4h-6l1.8 1.8C5.8 7.1 5 8.8 5 10.7c0 1.4.4 2.8 1.2 3.9-.1-.4-.2-.9-.2-1.4 0-2.3 1.4-4.2 3.4-5l1.8 1.8V4z" /></>),
  'copy': (<><path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm3 1v5h-1V8z" /><path d="M8 10h5v1H8z" /></>),
  'move': (<><path d="M14 8l-2.8-2.8V7H9V4.8h1.8L8 2 5.2 4.8H7V7H4.8V5.2L2 8l2.8 2.8V9H7v2.2H5.2L8 14l2.8-2.8H9V9h2.2v1.8z" /></>),
  'not-allowed': (<NotAllowedIcon onlyPath />),
  'col-resize': (<><path d="M7 7H4.8V5.2L2 8l2.8 2.8V9H7v4h1V3H7zm2 0v2h2.2v1.8L14 8l-2.8-2.8V7z" /></>),
  'row-resize': (<><path d="M9 7V4.8h1.8L8 2 5.2 4.8H7V7H3v1h10V7zm0 2H7v2.2H5.2L8 14l2.8-2.8H9z" /></>),
  'n-resize': (<><path d="M7 11.2V13h2V4.8h1.8L8 2 5.2 4.8H7V8z" /></>),
  'ne-resize': (<><path d="M2.8 11.8l1.4 1.4 7.5-7.5L13 7V3H9l1.3 1.3z" /></>),
  'e-resize': (<><path d="M4.8 7H3v2h8.2v1.8L14 8l-2.8-2.8V7H8z" /></>),
  'se-resize': (<><path d="M4.2 2.8L2.8 4.2l7.5 7.5L9 13h4V9l-1.3 1.3z" /></>),
  's-resize': (<><path d="M9 4.8V3H7v8.2H5.2L8 14l2.8-2.8H9V8z" /></>),
  'sw-resize': (<><path d="M13.2 4.2l-1.4-1.4-7.5 7.5L3 9v4h4l-1.3-1.3z" /></>),
  'w-resize': (<><path d="M11.2 9H13V7H4.8V5.2L2 8l2.8 2.8V9H8z" /></>),
  'nw-resize': (<><path d="M11.8 13.2l1.4-1.4-7.5-7.5L7 3H3v4l1.3-1.3z" /></>),
  'ew-resize': (<><path d="M14 8l-2.8-2.8V7H4.8V5.2L2 8l2.8 2.8V9h6.4v1.8z" /></>),
  'ns-resize': (<><path d="M8 14l2.8-2.8H9V4.8h1.8L8 2 5.2 4.8H7v6.4H5.2z" /></>),
  'nesw-resize': (<><path d="M5.7 11.7l6-6L13 7V3H9l1.3 1.3-6 6L3 9v4h4z" /></>),
  'nwse-resize': (<><path d="M11.7 10.3l-6-6L7 3H3v4l1.3-1.3 6 6L9 13h4V9z" /></>),
  'zoom-in': (<ZoomInIcon onlyPath />),
  'zoom-out': (<ZoomOutIcon onlyPath />),
  'grab': (<><path d="M12.2 6.4L11.7 8H11l.5-2.8c.3-2-1.3-2-1.4-1.3L9.5 8H9V3c0-.6-.4-1-1-1s-1 .4-1 1l.2 5h-.6l-.4-3.8C6 3.1 5.4 2.8 4.8 3c-.5.2-.7.7-.6 1.4L5 8.2v2.4L3.3 8.4c-.3-.4-.9-.5-1.4-.2-.4.3-.6.9-.2 1.4l3.5 4.3c.5.7 1.3 1.1 2.2 1.1h3.9l.7-1.8c.7-1.6 1-3.3 1-5l.4-1.1c.4-1.6-.9-1.9-1.2-.7zM7 14l-1-3h1v3zm1.5.5L8 11h1l-.5 3.5zM10 14v-3h1l-1 3z" /></>),
  'grabbing': (<><path d="M11.9 5v2H11V5c0-.8-.5-1.2-1.1-1v3H9V4.8c0-.5-.3-.8-.7-.8-.4 0-.8.3-.8.8V7h-1V5C6.1 4.7 5 4.8 5 6v3.6l-.2-.3c-.3-.4-.9-.5-1.4-.2-.4.3-.5.9-.2 1.4l2 2.5c.5.6 1.3 1 2.2 1h3.9l.7-1.8c.7-1.6 1-3.3 1-5V6c0-.7-.5-1.2-1.1-1zM7 13l-1-3h1v3zm1.5.5L8 10h1l-.5 3.5zM10 13v-3h1l-1 3z" /></>),
};


export const CursorComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
