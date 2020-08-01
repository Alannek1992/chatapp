import React from "react";
import { Styled } from "./ChatPanel.styled";
import Message from "./message/Message";

const data = [
  {
    key: "1",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    sentByMe: true,
  },
  {
    key: "2",
    content:
      "Nulla pulvinar eleifend sem. Aenean vel massa quis mauris vehicula lacinia.",
    sentByMe: false,
  },
  {
    key: "3",
    content: "Mauris dictum facilisis augue. Maecenas lorem.",
    sentByMe: true,
  },
  {
    key: "4",
    content:
      "Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.",
    sentByMe: false,
  },
];

const ChatPanel: React.FC = () => (
  <Styled.ChatPanel
    data={data}
    renderItem={({ item }) => (
      <Message content={item.content} key={item.key} sentByMe={item.sentByMe} />
    )}
  ></Styled.ChatPanel>
);

export default ChatPanel;
