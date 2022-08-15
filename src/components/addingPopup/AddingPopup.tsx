import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  closeHandler: () => void;
  handleSubmit: (formData: {}) => void;
}

interface formData {
  name: string;
  number: string;
  cvc: string;
  exp: string;
}

function AddingPopup(props: Props) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    cvc: "",
    exp: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  }

  function validateForm(): boolean {
    if (formData.name == "" || formData.name.length < 4) {
      alert("Please enter your Full name");
      return false;
    }
    if (formData.number == "" || formData.number.length != 16) {
      alert("Please enter valid credit card number");
      return false;
    }
    if (formData.cvc == "" || formData.cvc.length != 3) {
      alert("Please enter valid CVC/CVV");
      return false;
    }
    if (
      formData.exp == "" ||
      !formData.exp.match("(0[1-9]|10|11|12)/20[0-9]{2}$")
    ) {
      alert("Please enter a valid expire date");
      return false;
    }

    return true;
  }

  return (
    <OuterBox>
      <Box>
        <CloseButton onClick={props.closeHandler}>
          <img src="./assets/icons/cross.svg" alt="x" />
        </CloseButton>
        <Title>Add Card</Title>
        <form style={{ margin: "0 50px" }}>
          <CustomLabel>
            <span>Cardholder Name</span>
            <input
              type="text"
              placeholder="Enter your name as written on card"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </CustomLabel>
          <CustomLabel>
            <span>Card Number</span>
            <input
              type="text"
              placeholder="Enter your card number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </CustomLabel>
          <LowerLabelContainer>
            <CustomLabel>
              <span>cvv/cvc</span>
              <input
                type="Number"
                placeholder="123"
                name="cvc"
                min={0}
                maxLength={3}
                value={formData.cvc}
                onChange={handleInputChange}
              />
            </CustomLabel>
            <CustomLabel>
              <span>Exp. Date</span>
              <input
                type="text"
                placeholder="10/2025"
                name="exp"
                value={formData.exp}
                onChange={handleInputChange}
              />
            </CustomLabel>
          </LowerLabelContainer>

          <AddButton
            type="submit"
            value="Add Card"
            onClick={(e) => {
              e.preventDefault();
              if (validateForm()) {
                props.handleSubmit(formData);
              }
            }}
          />
        </form>
      </Box>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Box = styled.div`
  position: relative;
  width: 450px;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 80vh);
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  overflow: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;

const CloseButton = styled.span`
  cursor: pointer;
  right: 20px;
  top: 20px;
  position: absolute;
`;
const LowerLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    margin: auto 0;
    width: 150px;
  }
`;

const CustomLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  font-size: var(--fontSize-sm);
  font-weight: var(--fontWeight-medium);

  span {
    margin-bottom: 5px;
  }
  input {
    font-size: var(--fontSize-sm);
    font-weight: var(--fontWeight-light);
    padding: 12px 24px;
    border: 1px solid #e8eaeb;
    border-radius: 8px;
  }
`;

const AddButton = styled.input`
  margin: 32px 0px 47px 0px;
  width: 100%;
  background: var(--color-brand);
  color: #ffffff;
  border: none;
  padding: 13px;
  border-radius: 8px;
`;

export default AddingPopup;
