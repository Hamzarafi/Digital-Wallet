import React from "react";
import {
  CreditCardList,
  Transactions,
  WelcomeComponent,
} from "../../components";

//mobile view width less tha 950

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="homeOuterContainer">
        <WelcomeComponent isMobile={false} />
        <div className="homeInnerContainer">
          <CreditCardList isMobile={false} />
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default Home;
