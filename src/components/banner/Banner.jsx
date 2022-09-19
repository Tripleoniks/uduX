import React from "react";
import { Artist, BannerTitle, BannerWrapper, TextContainer } from "./style";
import banner from "../../assests/images/banner.svg";
import text from "../../assests/images/text.svg";
import artist from "../../assests/images/Omah-Lay.svg";
import { Grow } from "../../shared/Grow";

const Banner = () => {
  return (
    <BannerWrapper>
      <TextContainer
        clean={
          banner !== null || banner !== undefined
            ? banner
            : "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      >
        <BannerTitle src={text} alt="title" />
        <Grow />
        <Artist src={artist} alt="artist" />
      </TextContainer>
    </BannerWrapper>
  );
};

export default Banner;
