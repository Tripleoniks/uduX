import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family:'BwModelica'
}
`;

export const Icon = styled.div`
  margin: 10px;
  margin-left: 0;

  &:hover {
    color: #fbba12;
  }
`;

export const CustomHR = styled.hr`
  border: none;
  height: 0.2px;
  background-color: #282828;
`;

export const CustomUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 5rem;
`;

export const CustomLI = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: #fbba12;
  }
`;

export const CustomSpan = styled.span`
  margin-top: 1rem;
`;

export const CustomInput = styled.input``;

export const CustomImg = styled.img`
  width: 100%;
`;

export const ProfileImage = styled(CustomImg)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  object-fit: contain;
`;

export default GlobalStyle;
