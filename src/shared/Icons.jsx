import { Icon } from "../globalStyles";
import home from "../assests/images/home.svg";
import minihome from "../assests/images/minihome.svg";
import album from "../assests/images/album.svg";
import minialbum from "../assests/images/minialbum.svg";
import circle from "../assests/images/circles.svg";
import minicircle from "../assests/images/minicircle.svg";
import records from "../assests/images/records.svg";
import minirecords from "../assests/images/minirecords.svg";
import audio from "../assests/images/audio.svg";
import sound from "../assests/images/sound.svg";
import media from "../assests/images/media.svg";
import heart from "../assests/images/heart.svg";
import search from "../assests/images/search.svg";

export const HomeIcon = () => {
  return (
    <Icon>
      <img src={home} alt="home" />
    </Icon>
  );
};

export const MiniHomeIcon = () => {
  return (
    <Icon>
      <img src={minihome} alt="home" />
    </Icon>
  );
};

export const CircleIcon = () => {
  return (
    <Icon>
      <img src={circle} alt="circle" />
    </Icon>
  );
};

export const MiniCircleIcon = () => {
  return (
    <Icon>
      <img src={minicircle} alt="circle" />
    </Icon>
  );
};

export const AlbumIcon = () => {
  return (
    <Icon>
      <img src={album} alt="album" />
    </Icon>
  );
};

export const MiniAlbumIcon = () => {
  return (
    <Icon>
      <img src={minialbum} alt="minialbum" />
    </Icon>
  );
};

export const RecordsIcon = () => {
  return (
    <Icon>
      <img src={records} alt="records" />
    </Icon>
  );
};

export const MiniRecordsIcon = () => {
  return (
    <Icon>
      <img src={minirecords} alt="records" />
    </Icon>
  );
};

export const AudioIcon = () => {
  return (
    <Icon>
      <img src={audio} alt="audio" />
    </Icon>
  );
};
export const SoundIcon = () => {
  return (
    <Icon style={{ marginLeft: 10 }}>
      <img src={sound} alt="sound" />
    </Icon>
  );
};
export const MediaIcon = () => {
  return (
    <Icon>
      <img src={media} alt="media" />
    </Icon>
  );
};
export const HeartIcon = () => {
  return (
    <Icon>
      <img src={heart} alt="heart" />
    </Icon>
  );
};

export const SearchIcon = () => {
  return (
    <Icon>
      <img src={search} alt="search" />
    </Icon>
  );
};
