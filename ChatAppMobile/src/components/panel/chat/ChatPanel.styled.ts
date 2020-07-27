import { styledWithTheme } from "../../../styles/AppTheme";

const ChatPanel = styledWithTheme.ScrollView`
width: 100%;
background: ${(props) => props.theme.background};
color: ${(props) => props.theme.text}
`;

export const Styled = {
  ChatPanel,
};
