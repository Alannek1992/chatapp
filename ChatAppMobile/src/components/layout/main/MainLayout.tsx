import React from "react";
import { Styled } from "./MainLayout.styled";

interface IMainLayoutProps {
  content?: JSX.Element;
  footer?: JSX.Element;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  content,
  footer,
}: IMainLayoutProps) => (
  <Styled.MainLayout>
    {content}
    {footer}
  </Styled.MainLayout>
);

export default MainLayout;
