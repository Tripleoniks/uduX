import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar';
import Row from '../../components/row';
import Banner from '../../components/banner';
import SideBar from '../../components/sidebar';
import { Container, DashBoardContainer, Wrapper } from './style';
import { songs } from '../../data/songs';

const DashBoard = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  // This function is used to filter the cards based on the query- Title
  useEffect(() => {
    const fetchItems = async () => {
      // By title
      const result = songs.filter((value) =>
        value.title.toLowerCase().includes(query.toLocaleLowerCase())
      );
      setItems(result);
    };

    fetchItems();
  }, [query]);

  // This function is used to filter the cards based on the query- Artist
  useEffect(() => {
    const fetchItems = async () => {
      //  by artist
      const result = songs.filter((value) =>
        value.artists.some((artist) =>
          artist.toLowerCase().includes(query.toLocaleLowerCase())
        )
      );
      setItems(result);
    };

    fetchItems();
  }, [query]);

  const queryFunction = (q) => {
    setQuery(q);
  };

  return (
    <Wrapper>
      <SideBar />
      <NavBar getQuery={queryFunction} />
      <DashBoardContainer>
        <Container>
          <Banner />
          <Row title={'Welcome Back'} songs={items} />
          <Row title={'Cheers to the Weekend '} songs={items} />
        </Container>
      </DashBoardContainer>
    </Wrapper>
  );
};

export default DashBoard;
