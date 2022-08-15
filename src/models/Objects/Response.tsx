import { Transaction } from "./Transaction";

export interface Response {
  createdAt: string;
  firstName: string;
  lastName: string;
  gender: string;
  currencyExchangeRates: CurrencyExchangeRates;
  cards: Card[];
  id: string;
}

export interface CurrencyExchangeRates {
  usdToChf: string;
  usdToEuro: string;
  usdToTry: string;
}

export interface Card {
  amount: string;
  cardNumber: string;
  cardExpiration: string;
  cardCvv: string;
  transactions: Transaction[];
}
