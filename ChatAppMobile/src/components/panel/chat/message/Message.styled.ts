import { styledWithTheme } from "../../../../styles/AppTheme";

interface IMessageProps {
  sentByMe: boolean;
}

const Message = styledWithTheme.View<IMessageProps>`
background: ${(props) =>
  props.sentByMe ? props.theme.primary : props.theme.secondary}
align-self: ${(props) => (props.sentByMe ? "flex-end" : "flex-start")};;
margin-right: ${(props) => (props.sentByMe ? "0" : "20%")};
margin-left: ${(props) => (props.sentByMe ? "20%" : "0")};
margin-bottom: 1.5%;
margin-top: 1.5%;
border-radius: 4px;
padding: 7px;
`;

const MessageText = styledWithTheme.Text<IMessageProps>`
color: ${(props) =>
  props.sentByMe ? props.theme.primaryText : props.theme.secondaryText};
  font-size: 15px;
`;

export const Styled = {
  Message,
  MessageText,
};
