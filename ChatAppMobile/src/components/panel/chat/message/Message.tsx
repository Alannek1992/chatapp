import React from "react";
import { Styled } from "./Message.styled";

export interface IMessageProps {
  key: string;  
  content: string;
}

const Message: React.FC<IMessageProps> = ({ content }: IMessageProps) => (
  <Styled.Message>
    <Styled.MessageText>{content}</Styled.MessageText>
  </Styled.Message>
);

export default Message;
