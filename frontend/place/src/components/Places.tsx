import React from "react";
import Card from "./Card";
import TCard from "../types/card";
import api from "../utils/api";

import '../index.css'

const Places = () => {
  const [cards, setCards] = React.useState<TCard[]>([]);

  React.useEffect(() => {
    api
      .getCardList()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  function onCardClick(card: TCard): void {
    console.log(card)
  }

  function onCardDelete(card: TCard): void {
    console.log(card)
  }

  return (
    <ul className="places__list">
      {cards.map((card) => (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardClick}
          onCardDelete={onCardDelete}
        />
      ))}
    </ul>
  );
}

export default Places;
