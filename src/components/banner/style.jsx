import styled from "styled-components";
import { CustomImg } from "../../globalStyles";

export const BannerWrapper = styled.div`
  margin: 10px;
  position: relative;
  min-height: 180px;
`;

export const TextContainer = styled.div`
  min-height: 180px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  background-image: url(${({ clean }) => clean});
  object-fit: cover;
  background-position: center center;
`;

export const Artist = styled(CustomImg)`
  position: relative;
  top: 35px;
  left: -30px;
  max-width: 350px;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const BannerTitle = styled(CustomImg)`
  position: relative;
  top: -55px;
  right: -30px;
  max-width: 90px;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;
