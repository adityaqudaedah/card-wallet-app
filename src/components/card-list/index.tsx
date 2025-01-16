import React from "react";


interface ICardList {
  cards: Array<React.ReactElement>;
}

const CardList: React.FC<ICardList> = ({ cards }) => {
  return (
    <React.Fragment>
      {" "}
      {cards.map((card, index) => (
        <React.Fragment key={index}>{card}</React.Fragment>
      ))}{" "}
    </React.Fragment>
  );
};

export default CardList;
