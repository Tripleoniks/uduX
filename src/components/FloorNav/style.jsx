import styled from "styled-components";
import bg from "../../assests/images/elegant.svg";

export const NavWrapper = styled.div`
  height: 92px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background: #000000;
  background-image: url(${bg});
  color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: none;

  @media screen and (max-width: 650px) {
    display: flex;
  }
`;
