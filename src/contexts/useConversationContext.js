import React, { useContext, useEffect, useState } from "react";
import { useUserContext } from "./useUserContext";

const conversationContext = React.createContext({});

export const ConversationProvider = ({ children }) => {
  const { recentUser, setRecentUser } = useUserContext();
  const [recentConversation, setRecentConversation] = useState();
  const [openModalAddConversation, setOpenModalAddConversation] = useState(
    false
  );

  const [openModalCallConversation, setOpenModalCallConversation] = useState(
    false
  );
  const [methodCall, setMethodCall] = useState("");
  const [recentCallConversation, setRecentCallConversation] = useState({
    status: false,
  });

  // Adding method
  const [methodAddConversation, setMethodAddConversation] = useState("");

  useEffect(() => {
    if (recentUser) {
      if (
        recentUser.conversations[recentUser.conversations.length - 1].messages
          .length === 0
      ) {
        setRecentConversation(
          recentUser.conversations[recentUser.conversations.length - 1]
        );
        console.log(recentUser);
      }
    }
  }, [recentUser]);

  const toggleModalAddConversation = () => {
    setOpenModalAddConversation((prev) => !prev);
    setMethodAddConversation("");
  };

  const chooseConversation = (conversation) => {
    setRecentConversation(conversation);
    if (openModalAddConversation) {
      toggleModalAddConversation();
    }
  };

  const chooseContactToChat = (contact) => {
    const { conversations } = recentUser;
    const ExistedConversation = conversations.find(
      (conversation) => conversation.otherContact.id === contact.id
    );

    console.log("Clicked");
    if (ExistedConversation) {
      setRecentConversation(ExistedConversation);
    } else {
      setRecentUser((prev) => ({
        ...prev,
        conversations: [
          ...prev.conversations,
          {
            idConversation: recentUser.conversations.length + 1,
            otherContact: contact,
            messages: [],
          },
        ],
      }));
    }
    if (openModalAddConversation) {
      toggleModalAddConversation();
    }
  };

  const sendMessage = (text) => {
    let newArrayMessage = recentConversation.messages;

    newArrayMessage.push({
      sender: { id: recentUser.id, name: recentUser.name },
      message: text,
    });
    setRecentConversation((prev) => ({ ...prev, newArrayMessage }));
  };

  const finishConversation = () => {
    setRecentConversation();
  };
  // Call conversation
  const toggleModalCallConversation = () => {
    setOpenModalCallConversation((prev) => !prev);
  };

  const pickCallConversation = (otherContact) => {
    toggleModalCallConversation();
    if (methodCall === "video-call") {
      setRecentCallConversation({
        method: "video-call",
        cam: true,
        mic: true,
        volume: true,
        status: true,
        otherContact,
      });
    } else if (methodCall === "voice-call") {
      setRecentCallConversation({
        method: "voice-call",
        cam: false,
        mic: true,
        volume: true,
        status: true,
        otherContact,
      });
    }
  };

  const finishCallConversation = () => {
    setRecentCallConversation({ status: false });
  };

  const toggleMic = () => {
    setRecentCallConversation((prev) => ({ ...prev, mic: !prev.mic }));
  };

  const toggleCam = () => {
    setRecentCallConversation((prev) => ({ ...prev, cam: !prev.cam }));
  };
  const conversationContextValue = {
    recentConversation,
    chooseConversation,
    chooseContactToChat,
    sendMessage,
    finishConversation,

    // add conversation
    openModalAddConversation,
    toggleModalAddConversation,
    methodAddConversation,
    setMethodAddConversation,
    // call conversation
    openModalCallConversation,
    toggleModalCallConversation,
    methodCall,
    setMethodCall,
    // call conversation controller
    recentCallConversation,
    setRecentCallConversation,

    pickCallConversation,
    finishCallConversation,
    toggleCam,
    toggleMic,
  };

  return (
    <conversationContext.Provider value={conversationContextValue}>
      {children}
    </conversationContext.Provider>
  );
};

export const useConversationContext = () => useContext(conversationContext);
