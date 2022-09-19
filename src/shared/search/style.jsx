import styled from "styled-components";
import { CustomInput } from "../../globalStyles";

export const SearchField = styled(CustomInput)`
  background-color: transparent;
  border: none;
  color: #fff;
  outline: none;
  min-width: 350px;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    min-width: 250px;
  }
`;
