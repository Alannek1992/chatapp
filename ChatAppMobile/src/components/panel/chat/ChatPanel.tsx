import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Styled } from "./ChatPanel.styled";

const ChatPanel: React.FC = () => (
  <Styled.ChatPanel>
    <Text>Content</Text>
  </Styled.ChatPanel>
);

export default ChatPanel;
