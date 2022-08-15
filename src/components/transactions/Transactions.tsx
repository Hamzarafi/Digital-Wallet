import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import styled from "styled-components";
import { Card, CurrencyExchangeRates } from "../../models/Objects/Response";
import { Transaction } from "../../models/Objects/Transaction";
import TransactionItem from "./TransactionItem";

interface Props {
  isMobile: boolean;
  selectedCard: Card | undefined;
  currencyData: CurrencyExchangeRates | undefined;
}

const options = [
  { value: "TL", label: "TL" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "CHF", label: "CHF" },
];

function Transactions({ isMobile, selectedCard, currencyData }: Props) {
  const [currency, setCurrency] = useState({ value: "USD", label: "USD" });
  const [currencyMultiplier, setCurrencyMultiplier] = useState(1);

  const currencyLogo = (cur: string) => {
    switch (cur) {
      case "USD":
        return "$";
      case "TL":
        return "₺";
      case "EUR":
        return "€";
      case "CHF":
        return "CHF";
      default:
        break;
    }
  };
  useEffect(() => {
    if (currencyData) {
      switch (currency.value) {
        case "USD":
          setCurrencyMultiplier(1);
          break;
        case "TL":
          setCurrencyMultiplier(parseFloat(currencyData?.usdToTry));
          break;
        case "EUR":
          setCurrencyMultiplier(parseFloat(currencyData?.usdToEuro));
          break;
        case "CHF":
          setCurrencyMultiplier(parseFloat(currencyData?.usdToChf));
          break;
        default:
          break;
      }
    }
  }, [currency]);

  return (
    <OuterContainer style={{ borderRadius: `${isMobile ? "30px" : "8px"}` }}>
      <div
        className={`${isMobile ? "headerContainerMobile" : "headerContainer"}`}
      >
        <div>
          <div className="balanceTitleContainer">Your Balance</div>
          <div className="amountContainer">
            {selectedCard?.amount
              ? `${(
                  parseFloat(selectedCard?.amount) * currencyMultiplier
                ).toFixed(2)} ${currencyLogo(currency.value)}`
              : "Could not load"}
          </div>
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
      </div>
      <div
        className={`${
          isMobile ? "bottomInnerMobileContainer" : "bottomInnerContainer"
        }`}
      >
        <div style={{ marginBottom: "16px" }}>Transactions</div>
        <div>
          {selectedCard?.transactions.map((item, index) => {
            return (
              <TransactionItem
                key={`transaction-list-${index}`}
                item={item}
                isMobile={isMobile}
                currencyMultiplier={currencyMultiplier}
              />
            );
          })}
        </div>
      </div>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin: 0 8px;
  max-width: 513px;
  background: #ffffff;

  display: flex;
  flex-direction: column;

  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 65px;

    .balanceTitleContainer {
      font-size: var(--fontSize-lg);
    }

    .amountContainer {
      font-size: var(--fontSize-xxl);
      font-weight: var(--fontWeight-bold);
      font-family: "IBM Plex Mono";
    }
  }

  .bottomInnerContainer {
    padding: 0px 10px 32px 65px;
    overflow-y: scroll;
  }

  .headerContainerMobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 28px;
    align-items: center;

    .balanceTitleContainer {
      font-size: var(--fontSize-sm: 14px);
    }

    .amountContainer {
      font-size: 24px;
      font-weight: var(--fontWeight-bold);
      font-family: "IBM Plex Mono";
    }
  }

  .bottomInnerMobileContainer {
    padding: 0px 28px 28px 28px;
  }
`;

const DropListContainer = styled.div`
  width: 109px;
  span {
    background: #ffffff;
  }
`;

export default Transactions;
