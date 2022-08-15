import React, { useState } from "react";
import styled, { css } from "styled-components";
import AddingPage from "../addingPage/AddingPage";
import CreditCard from "./CreditCard";

interface Props {}

function CreditCardList({}: Props) {
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
      <CardsContainer>
        <CreditCard cardInfo={null} index={0} />
        <CreditCard cardInfo={null} index={1} />
        <CreditCard cardInfo={null} index={2} />
        <CreditCard cardInfo={null} index={3} />
        <CreditCard cardInfo={null} index={4} />
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
