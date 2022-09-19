import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #000;
  color: #d9d9d9;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const DashBoardContainer = styled.div`
  flex: 5;
  padding: 10px;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    boxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
    webkitboxshadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: #0f0f0f;
    outline: 1px solid #1f1f1f;
    border-radius: 1.5px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  border: #0f0f0f 1px solid;
  position: relative;
  top: 80px;
  width: 100%;
  margin-bottom: 150px;
`;
