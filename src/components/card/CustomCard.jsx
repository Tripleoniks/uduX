import React from "react";
import { Grow } from "../../shared/Grow";
import { CustomSmallText, CustomText } from "../../shared/text/Texts";
import {
  Artists,
  Border,
  Card,
  CardContainer,
  CardInfo,
  CardInfoContainer,
  ImgContainer,
  Profile,
  StyledImg,
} from "./style";

const CustomCard = ({ song }) => {
  return (
    <CardContainer>
      <Card>
        <Profile>
          <Border
            style={{
              background: song?.background,
            }}
          />
          <ImgContainer>
            <StyledImg src={song?.pic} alt="" />
          </ImgContainer>
          <Border
            style={{
              background: song?.background,
            }}
          />{" "}
        </Profile>
        <Grow />
        <CardInfoContainer
          style={{
            background: song?.background,
          }}
        >
          <CardInfo>
            <CustomText>{song?.title}</CustomText>
            <Artists>
              {song?.artists.map((artist, index) => {
                return (
                  <CustomSmallText key={index}>{`${artist}`}, </CustomSmallText>
                );
              })}
            </Artists>
          </CardInfo>
        </CardInfoContainer>
      </Card>
    </CardContainer>
  );
};

export default CustomCard;
