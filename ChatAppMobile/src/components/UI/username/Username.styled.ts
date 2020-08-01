import { styledWithTheme } from "../../../styles/AppTheme";

const Username = styledWithTheme.Text`
    color: ${(props) => props.theme.primaryText};
    font-size: 20px;
`;

export const Styled = {
  Username,
};
