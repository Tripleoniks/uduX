import React from 'react';
import {
  ButtonContainer,
  CustomNav,
  MiniNavBarWrapper,
  NavButton,
  SearchBox,
} from './style';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { ProfileImage } from '../../globalStyles';
import { SearchIcon } from '../../shared/Icons';
import pic from '../../assests/images/profileImg.png';
import Search from '../../shared/search/Search';

const NavBar = ({ getQuery }) => {
  return (
    <>
      <CustomNav>
        <ButtonContainer>
          <NavButton>
            <MdArrowBackIos />
          </NavButton>
          <NavButton>
            <MdArrowForwardIos />
          </NavButton>
        </ButtonContainer>
        <SearchBox>
          <SearchIcon />
          <Search getQuery={getQuery} />
        </SearchBox>
      </CustomNav>
      <MiniNavBarWrapper>
        {' '}
        <ProfileImage src={pic} alt="profile-img" />
      </MiniNavBarWrapper>
    </>
  );
};

export default NavBar;
