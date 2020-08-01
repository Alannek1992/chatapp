import React from "react";
import { Styled } from "./Message.styled";

export interface IMessageProps {
  key: string;  
  content: string;
  sentByMe: boolean;
}

const Message: React.FC<IMessageProps> = ({ content, sentByMe }: IMessageProps) => (
  <Styled.Message sentByMe={sentByMe} >
    <Styled.MessageText sentByMe={sentByMe}>{content}</Styled.MessageText>
  </Styled.Message>
);

export default Message;
