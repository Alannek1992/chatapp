import React from "react";
import { Styled } from "./Avatar.styled";

interface IAvatarProps {
  avatar: JSX.Element;
}

const Avatar: React.FC<IAvatarProps> = ({ avatar }: IAvatarProps) => (
  <Styled.Avatar>{avatar}</Styled.Avatar>
);

export default Avatar;
