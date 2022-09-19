import styled from 'styled-components';
import bg from '../../assests/images/elegant.svg';

export const SideBarWrapper = styled.div`
  background-color: #0f0f0f;
  height: 100vh;
  flex: 1;
  min-width: 300px;
  font-size: 16px;
  background-image: url(${bg});

  @media screen and (max-width: 768px) {
    min-width: 180px;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const SideBarTop = styled.div`
  padding: 1rem;
  min-height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background: #0f0f0f;
  z-index: 10;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const SideBarCenter = styled.div`
  padding: 1rem;
  max-height: 89vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
  }

  &::-webkit-scrollbar-track {
    margin-bottom: 30rem;
    boxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
    webkitboxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: #fbba12;
    outline: 1px solid #1f1f1f;
    border-radius: 1.5px;
    height: 5px;
  }
`;
