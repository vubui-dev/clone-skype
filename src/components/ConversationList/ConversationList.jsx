import Conversation from "components/ConversationList/Conversation/Conversation";
import { useConversationContext } from "contexts/useConversationContext";
import { useUserContext } from "contexts/useUserContext";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ConversationList.css";

const ConversationList = (props) => {
  const { recentConversation, chooseConversation } = useConversationContext();
  const { recentUser } = useUserContext();

  return (
    <ListGroup className="conversation-list" flush>
      {recentUser &&
        recentUser.conversations
          .filter((conversation) => conversation.messages.length > 0)
          .map((conversation) => (
            <ListGroupItem
              key={conversation.otherContact.id}
              className={`conversation-item border-0 
          ${
            recentConversation &&
            recentConversation.idConversation === conversation.idConversation &&
            "conversation-item--active"
          }`}
              onClick={() => chooseConversation(conversation)}
            >
              <Conversation
                nameContact={conversation.otherContact.name}
                messageContact={
                  conversation.messages[conversation.messages.length - 1]
                    .message
                }
                urlAvatar={conversation.otherContact.urlAvatar}
              />
            </ListGroupItem>
          ))}
    </ListGroup>
  );
};

export default ConversationList;
