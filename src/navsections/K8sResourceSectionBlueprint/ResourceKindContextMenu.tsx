import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {Dropdown} from 'antd';

import styled from 'styled-components';

import {ItemCustomComponentProps} from '@models/navigator';

import {useAppSelector} from '@redux/hooks';
import {isInPreviewModeSelector} from '@redux/selectors';

import {Dots} from '@atoms';

import ResourceActionsMenu from '@components/molecules/ResourceActionsMenu';

import Colors from '@styles/Colors';

const StyledActionsMenuIconContainer = styled.span<{isSelected: boolean}>`
  cursor: pointer;
  margin-right: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const ContextMenu = (props: ItemCustomComponentProps) => {
  const {itemInstance} = props;
  const resourceMap = useAppSelector(state => state.main.resourceMap);
  const previewType = useAppSelector(state => state.main.previewType);
  const isInPreviewMode = useSelector(isInPreviewModeSelector);
  const resource = useAppSelector(state => state.main.resourceMap[itemInstance.id]);

  const selectedResourceId = useAppSelector(state => state.main.selectedResourceId);

  const isResourceSelected = useMemo(() => {
    return itemInstance.id === selectedResourceId;
  }, [itemInstance, selectedResourceId]);

  if (!resource) {
    return null;
  }

  return (
    <Dropdown
      overlay={
        <ResourceActionsMenu
          resource={resource}
          resourceMap={resourceMap}
          isInPreviewMode={isInPreviewMode}
          previewType={previewType}
        />
      }
      trigger={['click']}
      placement="bottomCenter"
    >
      <StyledActionsMenuIconContainer isSelected={itemInstance.isSelected}>
        <Dots color={isResourceSelected ? Colors.blackPure : undefined} />
      </StyledActionsMenuIconContainer>
    </Dropdown>
  );
};

export default ContextMenu;
