import React from 'react';
import { CustomHR, CustomLI, CustomUL, ProfileImage } from '../../globalStyles';
import { Grow } from '../../shared/Grow';
import {
  AudioIcon,
  HeartIcon,
  MediaIcon,
  MiniAlbumIcon,
  MiniCircleIcon,
  MiniHomeIcon,
  MiniRecordsIcon,
  SearchIcon,
  SoundIcon,
} from '../../shared/Icons';
import { SideBarCenter, SideBarTop, SideBarWrapper, UserName } from './style';
import pic from '../../assests/images/profileImg.png';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarTop>
        <ProfileImage src={pic} alt="profile-img" />
        <UserName>Hey, Aleem</UserName>
      </SideBarTop>
      <SideBarCenter>
        {' '}
        <CustomUL>
          <CustomLI>
            <MiniHomeIcon />
            <span>Home</span>
          </CustomLI>
          <CustomLI>
            <MiniCircleIcon />
            <span>Discover</span>
          </CustomLI>
          <CustomHR />
          <CustomLI>
            <MiniAlbumIcon />
            <span>Your Library</span>
          </CustomLI>
          <CustomLI>
            <HeartIcon />

            <span>Liked Songs</span>
            <SoundIcon />
          </CustomLI>
          <CustomLI>
            <AudioIcon />
            <span>Recently Played</span>
          </CustomLI>
          <CustomLI>
            <MediaIcon />
            <span>Create Playlist</span>
          </CustomLI>{' '}
          <CustomLI>
            <MiniRecordsIcon />
            My Playlist
            <Grow />
            <SearchIcon space={10} />
          </CustomLI>
          <CustomHR />
          <CustomLI>
            <span>Riffs & Runs </span>
          </CustomLI>
          <CustomLI>
            <span>African Heat</span>
          </CustomLI>
          <CustomLI>
            <span>Gidi Nights</span>
          </CustomLI>
          <CustomLI>
            <span>Running out of Playlist na...</span>
          </CustomLI>
          <CustomLI>
            <span>Saturday was a Good Day</span>
          </CustomLI>
          <CustomLI>
            <span>Gidi Nights</span>
            <span>Riffs & Runs </span>
          </CustomLI>
          <CustomLI>
            <span>African Heat</span>
          </CustomLI>
          <CustomLI>
            <span>Gidi Nights</span>
          </CustomLI>
          <CustomLI>
            <span>Running out of Playlist na...</span>
          </CustomLI>
          <CustomLI>
            <span>Saturday was a Good Day</span>
          </CustomLI>
          <CustomLI>
            <span>Gidi Nights</span>
          </CustomLI>
          <CustomLI>
            <span>Running out of Playlist na...</span>
          </CustomLI>
          <CustomLI>
            <span>Saturday was a Good Day</span>
          </CustomLI>
          <CustomLI>
            <span>Gidi Nights</span>
          </CustomLI>
        </CustomUL>
      </SideBarCenter>
    </SideBarWrapper>
  );
};

export default SideBar;
