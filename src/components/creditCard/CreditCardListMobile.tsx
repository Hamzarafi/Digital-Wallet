import moment from "moment";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "../../models/Objects/Response";
import AddingPage from "../addingPage/AddingPage";
import { FormData } from "../addingPopup/AddingPopup";
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
      <CardsContainer>
        {cards &&
          cards.map((card: Card, index: number) => {
            return (
              <CreditCard
                cardInfo={card}
                index={index}
                name={name}
                key={`card-mobile-list-${index}`}
                onCardClick={onCardClick}
              />
            );
          })}
      </CardsContainer>
      <CreditCardAdd onClick={() => togglePopup()}>
        <img src="./assets/icons/plus.svg" alt="+" /> Add Card
      </CreditCardAdd>
      {isOpen && (
        <AddingPage
          closeHandler={togglePopup}
          handleSubmit={handleFormSubmit}
        />
      )}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  height: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: center;
  overflow-x: scroll;
  height: 200px;
`;

const CreditCardAdd = styled.button`
  border-radius: 8px;
  border: 1px solid var(--color-brand);
  color: var(--color-brand);
  background: var(--color-light-grey);
  padding: 13px;
  font-size: var(--fontSize-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 24px 0px 35px 0px;
`;

export default CreditCardList;
