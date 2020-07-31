import { styledWithTheme } from "../../../../styles/AppTheme";

const Message = styledWithTheme.View`
background: red;
align-self: flex-start;
margin-right: 20%;
margin-bottom: 1.5%;
margin-top: 1.5%;
`;

const MessageText = styledWithTheme.Text`
color: ${(props) => props.theme.text}
`;

export const Styled = {
  Message,
  MessageText,
};
