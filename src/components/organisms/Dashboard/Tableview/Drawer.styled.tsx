import {Button, Drawer as RawDrawer, Tabs as RawTabs} from 'antd';

import {LeftOutlined as RawLeftOutlined, RightOutlined as RawRightOutlined} from '@ant-design/icons';

import styled from 'styled-components';

export const Drawer = styled(RawDrawer)`
  & .ant-drawer-content {
    background: #141414;
  }
  z-index: 100;

  & .ant-drawer-close {
    position: absolute;
    right: 0px;
  }

  & .ant-drawer-extra {
    margin-right: 20px;
  }

  & .ant-drawer-header {
    border-bottom: none;
  }

  & .ant-drawer-body {
    overflow: hidden;
    padding: 0;
  }
`;

export const DrawerTitle = styled.div`
  font-size: 16px;
  color: #dbdbdb;
  font-weight: 700;
`;

export const TabsContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(100% - 75px) 75px;
  grid-template-areas:
    'tab-content'
    'footer';
`;

export const Tabs = styled(RawTabs)`
  overflow: hidden;
  grid-area: tab-content;
  & .ant-tabs-nav {
    padding: 0 24px;
    margin: 0;

    .ant-tabs-nav-list {
      font-weight: 400;
      font-size: 14px;
      color: #dbdbdb;

      .ant-tabs-tab {
        padding: 16px 0 24px 0;
      }

      .ant-tabs-tab-active {
        font-weight: 600;
      }
    }
  }

  & .ant-tabs-content {
    padding: 24px;
    overflow-y: scroll;
    height: 100%;
  }
`;

export const TabsFooter = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-top: 1px solid #303030;

  & > button:first-child {
    margin-right: 8px;
  }
`;

export const NavigationButton = styled(Button)`
  background-color: #177ddc;
  border-radius: 2px;
  padding: 0px 10px;
  height: 40px;

  &:hover,
  &:focus {
    background-color: #177ddc88;
  }
`;

export const LeftOutlined = styled(RawLeftOutlined)`
  color: #dbdbdb;
  font-size: 18px;
`;
export const RightOutlined = styled(RawRightOutlined)`
  color: #dbdbdb;
  font-size: 18px;
`;
