import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Styled } from "./IconContainer.styled";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IIconContainerProps {
  icon: IconDefinition;
  style?: { [key: string]: string }[];
}

const IconContainer: React.FC<IIconContainerProps> = ({
  icon,
  style,
}: IIconContainerProps) => (
  <Styled.IconContainer style={style}>
    <FontAwesomeIcon icon={icon} color={style?.[0].color} />
  </Styled.IconContainer>
);

export default IconContainer;
