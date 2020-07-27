import seedDb, { testingUsers } from "./utils/seedDatabase";
import getClient from "./utils/getClient";
import { createConversation, sendMessage, getConversation, getConversations, getMessages } from "./operations/conversation";
import { Conversation, SendMessageInput, Message } from "../src/generated/server/types";



describe("Tests related to conversation", () => {
  beforeAll(seedDb);
  let conversation: Conversation | null = null;
  const messageText = "Hi, its me!"
  it("Should create a conversation between predefined users ", async () => {
    const [userOne, userTwo] = testingUsers.users;
    const response = await getClient(userOne.token).mutate({
      mutation: createConversation,
      variables: {
        data: {
          participant: userTwo.user.nickname,
        },
      },
    });
    expect(response.data.createConversation.participants[0].user.nickname).toBe(
      userOne.user.nickname
    );
    expect(response.data.createConversation.participants[1].user.nickname).toBe(
      userTwo.user.nickname
    );

    conversation = response.data.createConversation;
  }),
    it("Should send message within the created conversation", async () => {
      const [userOne] = testingUsers.users;
      const data: SendMessageInput = {
        content: messageText,
        conversationId: conversation?.id ? conversation.id : "1"
      }

      const response = await getClient(userOne.token).mutate({mutation: sendMessage, variables: {data}})

      expect(response.data.sendMessage.conversation.messages.some((message: Message) => message.id === response.data.sendMessage.id )).toBe(true);

    }),
    it('Should get the pre created based on ID conversation between testing users', async () => {
      const [userOne] = testingUsers.users;
      const conversationId = conversation?.id ? conversation.id : "1"


      const response = await getClient(userOne.token).query({
        query: getConversation,
        variables: {
          conversationId
        }
      })

      expect(response.data.getConversation.id).toBe(conversationId);
    }),
    it('Should return array of conversations where user is participating', async () => {
      const [userOne] = testingUsers.users;

      const response = await getClient(userOne.token).query({
        query: getConversations
      });

      expect(response.data.getConversations[0].id).toBe(conversation?.id);
      expect(response.data.getConversations).toHaveLength(1);
    });
    it('Get messages of the created conversation', async () => {
      const [userOne] = testingUsers.users;
      const conversationId = conversation?.id ? conversation.id : "1"

      const response = await getClient(userOne.token).query({
        query: getMessages,
        variables: {
          conversationId
        }
      })

      expect(response.data.getMessages).toHaveLength(1);
      expect(response.data.getMessages[0].content).toBe(messageText);
    });
});
