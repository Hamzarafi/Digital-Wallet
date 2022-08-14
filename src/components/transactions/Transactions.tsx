import React, { useState } from "react";
import ReactSelect from "react-select";
import styled from "styled-components";
import { Transaction } from "../../models/Objects/Transaction";
import TransactionItem from "./TransactionItem";

const options = [
  { value: "TL", label: "TL" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
];

function Transactions() {
  const transdata: Transaction[] = [
    {
      amount: "482.79",
      category: "entertainment",
      company: "Konopelski, Johnson and Pacocha",
      date: "2022-07-17T07:52:23.012Z",
    },
    {
      amount: "10.93",
      category: "grocery",
      company: "Fisher Group",
      date: "2021-10-01T18:18:29.682Z",
    },
    {
      amount: "292.70",
      category: "equipment",
      company: "Keeling and Sons",
      date: "2021-11-26T10:24:29.161Z",
    },
    {
      amount: "482.79",
      category: "entertainment",
      company: "Konopelski, Johnson and Pacocha",
      date: "2022-07-17T07:52:23.012Z",
    },
    {
      amount: "10.93",
      category: "grocery",
      company: "Fisher Group",
      date: "2021-10-01T18:18:29.682Z",
    },
    {
      amount: "292.70",
      category: "equipment",
      company: "Keeling and Sons",
      date: "2021-11-26T10:24:29.161Z",
    },
    {
      amount: "482.79",
      category: "entertainment",
      company: "Konopelski, Johnson and Pacocha",
      date: "2022-07-17T07:52:23.012Z",
    },
    {
      amount: "10.93",
      category: "grocery",
      company: "Fisher Group",
      date: "2021-10-01T18:18:29.682Z",
    },
    {
      amount: "292.70",
      category: "equipment",
      company: "Keeling and Sons",
      date: "2021-11-26T10:24:29.161Z",
    },
  ];

  const [currency, setCurrency] = useState({ value: "USD", label: "USD" });

  const currencyLogo = (cur: string) => {
    switch (cur) {
      case "USD":
        return "$";
      case "TL":
        return "₺";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      default:
        break;
    }
  };

  return (
    <OuterContainer>
      <HeaderContainer>
        <div>
          <BalanceTitleContainer>Your Balance</BalanceTitleContainer>
          <AmountContainer>
            8.400,12 {currencyLogo(currency.value)}
          </AmountContainer>
        </div>
        <DropListContainer>
          <ReactSelect
            value={currency}
            onChange={(value: any) => {
              setCurrency(value);
            }}
            options={options}
            isSearchable={false}
          />
        </DropListContainer>
      </HeaderContainer>
      <BottomInnerContainer>
        <div style={{ marginBottom: "16px" }}>Transactions</div>
        <div>
          {transdata.map((item, index) => {
            return (
              <TransactionItem key={`transaction-list-${index}`} item={item} />
            );
          })}
        </div>
      </BottomInnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin: 0 8px;
  width: 513px;
  background: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 65px;
`;

const DropListContainer = styled.div`
  width: 109px;
  span {
    background: #ffffff;
  }
`;

const BalanceTitleContainer = styled.div`
  font-size: var(--fontSize-lg);
`;
const AmountContainer = styled.div`
  font-size: var(--fontSize-xxl);
  font-weight: var(--fontWeight-bold);
`;

const BottomInnerContainer = styled.div`
  padding: 0px 0px 32px 65px;
  overflow-y: scroll;
`;

export default Transactions;
