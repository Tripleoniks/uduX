import styled from "styled-components";

export const CardContainer = styled.div`
  padding-top: 36px;
  border: solid 1px #707070;
  background-color: #000;
  margin: 20px;
  transition: 1s ease-out all;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Card = styled.div`
  min-height: 250.01px;
  min-width: 226.38px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  height: 185px;
`;

export const Border = styled.div`
  height: 100%;
  flex: 1;
`;

export const ImgContainer = styled.div`
  padding: 10px;
  border: solid 1px #707070;
  padding-top: 5px;
  position: relative;
  top: -15px;
`;

export const StyledImg = styled.img`
  //   border: solid 10px #000;
  //   border-top: solid 5px #000;
`;

export const CardInfoContainer = styled.div`
  min-height: 74px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  position: absolute;
  bottom: 10px;
`;

export const CardInfo = styled.div`
  max-width: 186px;
`;

export const Artists = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
