import React from "react";
import SendButtonIcon from "../../../assets/svg/button/sendButton.svg";
import { Styled } from "./ChatFooter.styled";

const ChatFooter: React.FC = () => (
  <Styled.ChatFooter>
    <Styled.MessageText />
    <Styled.SendButton icon={<SendButtonIcon width={35} height={35} />} />
  </Styled.ChatFooter>
);

export default ChatFooter;
