import React from "react";
import { Styled } from "./Button.styled";
import { TouchableOpacity } from "react-native";

interface IButtonProps {
  style?: { [key: string]: string }[];
  icon: JSX.Element;
  click?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  style,
  icon,
  click,
}: IButtonProps) => (
  <TouchableOpacity onPress={click}>
    <Styled.ButtonView style={style}>
      {icon}
    </Styled.ButtonView>
  </TouchableOpacity>
);

export default Button;
