import React from "react";
import { Styled } from "./ChatToolbar.styled";
import { StackHeaderProps } from "@react-navigation/stack";
import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../UI/avatar/Avatar";
import AvatarIcon from "../../../assets/svg/avatar/man.svg";
import Status from "../../UI/status/Status";

interface IChatToolbarProps extends StackHeaderProps {
  title?: string;
}

const ChatToolbar: React.FC<IChatToolbarProps> = ({
  previous,
  navigation,
  scene,
}: IChatToolbarProps) => (
  <Styled.ChatToolbar>
    <Styled.GoBackIcon icon={faArrowLeft} />
    <Avatar avatar={<AvatarIcon width={50} height={50} />}></Avatar>
    <Styled.UserInfo>
      <Styled.ChatUsername name="Alannek"/>
      <Status />
    </Styled.UserInfo>
    <Styled.SettingsIcon icon={faEllipsisV} />
  </Styled.ChatToolbar>
);

export default ChatToolbar;
