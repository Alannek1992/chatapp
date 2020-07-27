import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "../screens/Chat/Chat";
import Login from "../screens/Login/Login";
import ChatToolbar from "../components/toolbar/chat/ChatToolbar";

const Stack = createStackNavigator();


const AppStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          header: (props) => <ChatToolbar {...props} title="chat" />,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
