import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/Button/Button';

import { PlusIcon } from 'src/components/icons/PlusIcon';
import { HelpIcon } from 'src/components/icons/HelpIcon';
import { NewFileIcon } from 'src/components/icons/NewFileIcon';
import { AssetIcon } from 'src/components/icons/AssetIcon';
import { SettingsIcon } from 'src/components/icons/SettingsIcon';
import { CursorComboIcon } from 'src/components/icons/CursorComboIcon';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.palette.asphalt};
`;

const ToolbarTopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-content: start;
`;

const ToolbarBottomSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToolbarButton = styled(Button)`
  align-items: center;
  justify-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.palette.maxLight};
  &:hover {
    background: ${props => props.theme.palette.minLight};
    border-color: ${props => props.theme.palette.minLight};
  }
  &:active {
    background: ${props => props.theme.palette.primaryStrong};
    border-color: ${props => props.theme.palette.primaryStrong};
  }
`;

export const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <ToolbarTopSection>
        <ToolbarButton>
          <CursorComboIcon size="s" type="default" />
        </ToolbarButton>
        <ToolbarButton>
          <PlusIcon size="s" />
        </ToolbarButton>
        <ToolbarButton>
          <NewFileIcon size="s" />
        </ToolbarButton>
        <ToolbarButton>
          <AssetIcon size="s" />
        </ToolbarButton>
      </ToolbarTopSection>
      <ToolbarBottomSection>
        <ToolbarButton>
          <SettingsIcon size="s" />
        </ToolbarButton>
        <ToolbarButton>
          <HelpIcon size="s" />
        </ToolbarButton>
      </ToolbarBottomSection>
    </ToolbarWrapper>
  );
};