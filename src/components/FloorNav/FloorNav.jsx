import React from "react";
import { NavWrapper } from "./style";
import {
  AlbumIcon,
  CircleIcon,
  HomeIcon,
  RecordsIcon,
} from "../../shared/Icons";

const FloorNav = () => {
  return (
    <NavWrapper>
      <HomeIcon />
      <CircleIcon />
      <AlbumIcon />
      <RecordsIcon />
    </NavWrapper>
  );
};

export default FloorNav;
