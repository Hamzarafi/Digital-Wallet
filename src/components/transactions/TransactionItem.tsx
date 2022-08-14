import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Transaction } from "../../models/Objects/Transaction";
import { toTitleCase } from "../../utilities/utils";

interface Props {
  item: Transaction;
}

function TransactionItem({ item }: Props) {
  const iconType = () => {
    switch (item.category) {
      case "entertainment":
        return "./assets/icons/game.svg";
      case "grocery":
        return "./assets/icons/buy.svg";
      case "equipment":
        return "./assets/icons/camera.svg";
      case "office items":
        return "./assets/icons/work.svg";
      default:
        return "./assets/icons/buy.svg";
    }
  };

  return (
    <ItemContainer>
      <img width={"60px"} height={"60px"} src={`${iconType()}`} />
      <InfoContainer>
        <InfoColumnContainer style={{ width: "120px" }}>
          <div className="upperText">{toTitleCase(item.category)}</div>
          <div className="lowerText">{moment(item.date).format("MMM DD")}</div>
        </InfoColumnContainer>
        <InfoColumnContainer>
          <div className="upperText">{parseFloat(item.amount).toFixed(3)}</div>
          <div className="lowerText">{item.company}</div>
        </InfoColumnContainer>
      </InfoContainer>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;

  .upperText {
    margin-bottom: 8px;
    font-weight: var(--fontWeight-medium);
  }

  .lowerText {
    color: var(--color-dark-grey);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoColumnContainer = styled.div`
  margin-left: 12px;
`;

export default TransactionItem;
