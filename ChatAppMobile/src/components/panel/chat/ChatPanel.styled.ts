import { styledWithTheme } from "../../../styles/AppTheme";
import { IMessageProps } from "./message/Message";
import { FlatList, StatusBar } from "react-native";

const ChatPanel = styledWithTheme(
  FlatList as new () => FlatList<IMessageProps>
)`
width: 100%;
background: ${(props) => props.theme.background};
color: ${(props) => props.theme.text};
padding: 0 15px;
`;

export const Styled = {
  ChatPanel,
};
