import moment from "moment";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "../../models/Objects/Response";
import AddingPopup, { FormData } from "../addingPopup/AddingPopup";
import CreditCard from "./CreditCard";

interface Props {
  cards: Card[] | undefined;
  name: string;
  onCardClick: (c: Card) => void;
  refetch: () => void;
}

function CreditCardList({ cards, name, onCardClick, refetch }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (formData: FormData) => {
    setIsOpen(false);
    saveCard(
      formData.number.match(/.{1,4}/g)?.join("-") || "",
      formData.cvc,
      moment(formData.exp, "MM/YYYY").toISOString()
    );
  };

  const saveCard = (number: string, cvc: string, exp: string) => {
    let newCardList: Card[];
    if (cards) {
      newCardList = [
        ...cards,
        {
          amount: "0.00",
          cardNumber: number,
          cardExpiration: exp,
          cardCvv: cvc,
          transactions: [],
        },
      ];
    } else {
      newCardList = [
        {
          amount: "0.00",
          cardNumber: number,
          cardExpiration: exp,
          cardCvv: cvc,
          transactions: [],
        },
      ];
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cards: newCardList }),
    };
    fetch(
      "https://62f63c8f612c13062b4997c6.mockapi.io/user/4846457457",
      requestOptions
    )
      .then((response) => response.json())
      .then(() => refetch());
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
