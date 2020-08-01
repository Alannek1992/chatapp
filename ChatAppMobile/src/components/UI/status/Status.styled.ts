import { styledWithTheme } from "../../../styles/AppTheme";

const StatusContainer = styledWithTheme.View`
flex-direction: row;
`;

const StatusText = styledWithTheme.Text`
color: ${(props) => props.theme.primaryText};
font-size: 11px;
padding: 0 5px;
`;

export const Styled = {
  StatusContainer,
  StatusText,
};
