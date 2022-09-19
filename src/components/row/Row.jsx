import React from "react";
import CustomCard from "../card";
import { CardContainer, RowContainer, RowTitle } from "./style";

const Row = ({ title, songs }) => {
  return (
    <RowContainer style={{ gap: title === "Welcome Back" ? 13 : 1 }}>
      <RowTitle>{title}</RowTitle>
      <CardContainer>
        {songs &&
          songs?.map((song) => {
            return <CustomCard key={song.id} song={song} />;
          })}
      </CardContainer>
    </RowContainer>
  );
};

export default Row;
