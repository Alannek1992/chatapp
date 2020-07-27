import React from "react";
import { Styled } from "./Status.styled";
import StatusIcon from "../../../assets/svg/status/online.svg";

const Status: React.FC = () => (
  <Styled.StatusContainer>
      <StatusIcon />
      <Styled.StatusText>Online</Styled.StatusText>
  </Styled.StatusContainer>
);

export default Status;
