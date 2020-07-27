import { styledWithTheme } from "../../../styles/AppTheme";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

const ChatFooter = styledWithTheme.View`
width: 100%
background: black;
border-top-color: ${(props) => props.theme.primary};
border-top-width: 1px;
flex-direction: row;
padding: 5px;
justify-content: space-around;
`;

const MessageText = styledWithTheme(Input)`
height: 45px;
width: 80%;
background: ${props => props.theme.primary}
border-radius: 10px;
color: ${props => props.theme.text}
padding: 3px;
`;

const SendButton = styledWithTheme(Button)`
border: none;
background: ${(props) => props.theme.primary}
padding: 5px;
border-radius: 10px;
`;

export const Styled = {
  ChatFooter,
  SendButton,
  MessageText,
};
