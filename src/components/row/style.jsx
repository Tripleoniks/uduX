import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  padding-right: 1rem;

  @media screen and (max-width: 900px) {
    padding: 1rem 1rem;
    padding-right: 0;
  }
`;

export const RowTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 20px;
  overflow: scroll;
  margin-left: -2rem;

  &::-webkit-scrollbar {
    width: 0em;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    boxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
    webkitboxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #555 30%, #fff 90%);
    background: #0f0f0f;
    outline: 1px solid #1f1f1f;
    border-radius: 1.5px;
    display: none;
  }

  @media screen and (max-width: 1260px) {
    max-width: 70vw;
  }
  @media screen and (max-width: 1060px) {
    max-width: 65vw;
  }
  @media screen and (max-width: 900px) {
    max-width: 60vw;
    margin-left: -1rem;
  }
  @media screen and (max-width: 650px) {
    max-width: 100vw;
    padding: 0;
  }
`;
