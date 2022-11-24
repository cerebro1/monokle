import {Button} from 'antd';

import styled from 'styled-components';

import {AnimationDurations} from '@shared/styles/animations';
import {Colors} from '@shared/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;

export const InformationMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${Colors.grey7};
  font-weight: 600;
  min-height: 5rem;
  max-height: 10rem;
  height: 100%;
`;

export const StartProjectContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 20rem);
  grid-column-gap: 1.1rem;
  grid-row-gap: 1.1rem;
  padding: 0 6rem;
`;

export const StartProjectItem = styled.div<{$disabled: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  cursor: ${({$disabled}) => ($disabled ? 'not-allowed' : 'pointer')};
  background: ${Colors.grey10};
  border-radius: 4px;

  &:hover {
    background: ${Colors.blue7};
    transition: background ${AnimationDurations.base};

    & > div:nth-child(3) {
      color: ${({$disabled}) => ($disabled ? Colors.grey6 : Colors.whitePure)};
    }
  }
`;

export const StartProjectItemLogo = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;

export const StartProjectItemTitle = styled.div<{$disabled: boolean}>`
  margin-top: 1.5rem;
  font-size: 16px;
  color: ${({$disabled}) => ($disabled ? Colors.grey6 : Colors.whitePure)};
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const StartProjectItemDescription = styled.div<{$disabled: boolean}>`
  margin-top: 1.5rem;
  font-size: 14px;
  font-weight: 400;
  color: ${({$disabled}) => ($disabled ? Colors.grey6 : Colors.grey7)};
  text-align: center;
`;

export const StartProjectItemButton = styled(Button)`
  background: ${Colors.blue7};
  color: ${Colors.whitePure};
  margin-top: 1.5rem;
  border: 1px solid ${Colors.blue6};
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;

  :hover,
  :active,
  :focus {
    background: ${Colors.blue7}CC;
    color: ${Colors.whitePure};
  }
`;
