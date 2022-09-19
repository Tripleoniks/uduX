import styled from "styled-components";
import { CustomInput } from "../../globalStyles";

export const CustomNav = styled.nav`
  padding: 1rem 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  font-size: 14px;
  position: fixed;
  z-index: 10;
  background: #000;
  width: 100%;
  margin-left: 10px;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  min-width: 100px;
`;

export const NavButton = styled.button`
  background-color: #0f0f0f;
  min-height: 40px;
  width: 100%;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const SearchBox = styled.div`
  margin-left: 40px;
  border: 1px solid #0f0f0f;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

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

export const MiniNavBarWrapper = styled.nav`
  background-color: #0f0f0f;
  padding: 1rem;
  min-height: 80px;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 650px) {
    background: red;
    display: none;
  }
`;
