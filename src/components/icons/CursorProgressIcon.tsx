import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorProgressIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
<polygon points="8,7 3,2 3,8.9 4.5,7.4 5.5,9.8 6.6,9.3 5.7,7 "/>
<g>
	<polygon points="10.5,10.3 11,9.5 10,9.5 	"/>
	<path d="M13,9.8V8H8v1.8c0.8,0,1.5,0.7,1.5,1.5S8.8,12.8,8,12.8v1.8h5v-1.8c-0.8,0-1.5-0.7-1.5-1.5S12.2,9.8,13,9.8z M11,11.3
		c0,0.9,0.6,1.7,1.5,1.9v0.3h-1.3l-0.8-0.8l-0.8,0.8H8.5v-0.3c0.9-0.2,1.5-1,1.5-1.9S9.4,9.5,8.5,9.3V8.8h4v0.6
		C11.6,9.5,11,10.3,11,11.3z"/>
</g>


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
