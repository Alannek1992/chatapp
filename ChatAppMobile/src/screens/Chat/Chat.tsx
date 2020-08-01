import React from "react";
import MainLayout from "../../components/layout/main/MainLayout";
import ChatPanel from "../../components/panel/chat/ChatPanel";
import ChatFooter from "../../components/footer/chat/ChatFooter";

const Chat: React.FC = () => {
  return <MainLayout content={<ChatPanel />} footer={<ChatFooter />} />;
};

export default Chat;
