import { useUserContext } from "contexts/useUserContext";
import React, { useCallback } from "react";

const Message = ({ textMessage, sender, isLastMessage }) => {
  const { recentUser } = useUserContext();
  // useCallback to scroll to view of latest message
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  // Check message is sent by recent user
  const isSentByRecentUser = sender.id === recentUser.id;

  return (
    <div
      ref={isLastMessage ? setRef : null}
      className={`d-flex flex-column mt-3 ${
        isSentByRecentUser && "align-self-end"
      }`}
    >
      <div
        className={`${
          isSentByRecentUser ? "bg-primary" : "bg-secondary"
        }  text-white text-center px-3 py-2`}
        style={{ borderRadius: 8 }}
      >
        {textMessage}
      </div>
      <div
        className={`text-muted ${isSentByRecentUser && "text-right"}`}
        style={{ fontSize: "0.8rem" }}
      >
        {isSentByRecentUser ? "You" : sender.name}
      </div>
    </div>
  );
};

Message.propTypes = {};

export default Message;
