import { Platform, StatusBar } from "react-native";
import { styledWithTheme } from "../../../styles/AppTheme";
import IconContainer from "../../UI/icon/IconContainer";
import Username from "../../UI/username/Username";

const ChatToolbar = styledWithTheme.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background: ${(props) => props.theme.primary};
    padding: 5px 0;
    margin-top: ${Platform.OS === "ios" ? 0 : StatusBar.currentHeight + "px"};
`;

const GoBackIcon = styledWithTheme(IconContainer)`
color: ${(props) => props.theme.text};
justify-content: center;
padding: 0 20px;
`;

const ChatUsername = styledWithTheme(Username)`
color: ${(props) => props.theme.text};
font-size: 18px;
`;

const UserInfo = styledWithTheme.View`
flex-direction: column;
justify-content: center;
padding: 0 20px;
`;

const SettingsIcon = styledWithTheme(IconContainer)`
color: ${(props) => props.theme.text};
justify-content: center;
margin-left: auto;
padding: 0 20px;
`;

export const Styled = {
  ChatToolbar,
  GoBackIcon,
  ChatUsername,
  UserInfo,
  SettingsIcon,
};
