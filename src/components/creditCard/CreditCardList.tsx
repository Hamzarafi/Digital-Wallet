import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "../../models/Objects/Response";
import AddingPopup from "../addingPopup/AddingPopup";
import CreditCard from "./CreditCard";

interface Props {
  cards: Card[] | undefined;
  name: string;
  onCardClick: (c: Card) => void;
}

function CreditCardList({ cards, name, onCardClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (formData: {}) => {
    setIsOpen(false);
    console.log(formData);
  };

  return (
    <OuterContainer>
      <p>Credit Cards</p>
      <CardsContainer>
        {cards &&
          cards.map((card: Card, index: number) => {
            return (
              <CreditCard
                cardInfo={card}
                index={index}
                name={name}
                key={`card-list-${index}`}
                onCardClick={onCardClick}
              />
            );
          })}
      </CardsContainer>
      <CreditCardAdd onClick={() => togglePopup()}>
        <img src="./assets/icons/plus-white.svg" alt="+" />
      </CreditCardAdd>
      {isOpen && (
        <AddingPopup
          closeHandler={togglePopup}
          handleSubmit={handleFormSubmit}
        />
      )}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin: 0 8px;
  background: #ffffff;
  border-radius: 8px;
  height: 100%;

  p {
    margin: 20px 0px 32px 49px;
    font-size: var(--fontSize-lg);
    font-weight: var(--fontWeight-medium);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  overflow-y: scroll;
  height: calc(100% - 80px);
  align-content: flex-start;
`;

const CreditCardAdd = styled.div`
  background: var(--color-brand);
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: relative;
  top: -30px;
  left: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CreditCardList;
