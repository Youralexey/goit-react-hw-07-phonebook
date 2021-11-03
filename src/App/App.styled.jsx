import styled from "@emotion/styled";

export const PrimaryTitle = styled.h1`
margin-left: 80px;
color: #0a034f;
`;

export const SecondaryTitle = styled.h2`
  margin-left: 80px;
  color: #0a034f;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 8px;
  margin-top: 8px;
  font-size: 14px;
  background-color: #5a6fb5;
  border: none;
  border-radius: 8px;
  &:hover,
  &:active {
    cursor: pointer;
    background-color: #98cedc;
  }
`;