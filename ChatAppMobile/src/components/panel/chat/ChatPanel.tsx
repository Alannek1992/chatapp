import React from "react";
import { Styled } from "./ChatPanel.styled";
import Message from "./message/Message";

const data = [
  {
    key: "1",
    content:
      "Hey you are some awesome, really ! Would be nice to meet each other",
  },
  {
    key: "2",
    content: "You are number one, really really really rrrrrrrrrrrrrrrr !",
  },
  {
    key: "3",
    content: "You are number one, really really really rrrrrrrrrrrrrrrr !",
  },
  {
    key: "4",
    content: "You are number one, really really really rrrrrrrrrrrrrr !",
  },
  {
    key: "5",
    content: "You are number one, really really really rrrrrrrrrrrr rr!",
  },
  {
    key: "6",
    content: "You are number one, really really really rrrrrrrrrrrrrr !",
  },
  {
    key: "7",
    content: "You are number one, really really really rrrrrrrrrrrrrrr !",
  },
  {
    key: "8",
    content: "You are number one, really really really rrrrrrrrrrrrrrrr !",
  },
  {
    key: "9",
    content: "You are number one, really really really rrrrrrrrrrrrrr !",
  },
  {
    key: "10",
    content: "You are number one, really really really rrrrrrrrrr !",
  },
  {
    key: "11",
    content: "You are number one, really really really rrrrrrrrrr !",
  },
  {
    key: "12",
    content: "You are number one, really really really rrrrrrrrrr !",
  },
  {
    key: "13",
    content: "You are number one, really really really rrrrrrrrrr !",
  },
];

const ChatPanel: React.FC = () => (
  <Styled.ChatPanel
    data={data}
    renderItem={({ item }) => <Message content={item.content} key={item.key} />}
  ></Styled.ChatPanel>
);

export default ChatPanel;
