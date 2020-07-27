import React from "react";
import { Styled } from "./Input.styled";

interface IInputProps {
  style?: { [key: string]: string }[];
}

const Input: React.FC<IInputProps> = ({ style }: IInputProps) => (
  <Styled.Input style={style}></Styled.Input>
);

export default Input;
