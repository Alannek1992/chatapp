import React from "react";
import { Styled } from "./Username.styled";

interface IUsernameProps {
  style?: { [key: string]: string }[];
  name: string;
}

const Username: React.FC<IUsernameProps> = ({
  style,
  name,
}: IUsernameProps) => <Styled.Username style={style}>{name}</Styled.Username>;

export default Username;
