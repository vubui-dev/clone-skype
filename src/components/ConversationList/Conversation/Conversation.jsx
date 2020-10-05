import UserAvatar from "components/UserAvatar/UserAvatar";
import React from "react";

const Conversation = ({ nameContact, messageContact, urlAvatar }) => {
  return (
    <div className="conversation d-flex align-items-center position-relative">
      <UserAvatar urlAvatar={urlAvatar} />
      <div className="sum-conversation d-flex flex-column ml-2 justify-content-between h-100 ">
        <div className="">{nameContact}</div>
        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          {messageContact}
        </div>
      </div>
      <small className="text-muted" style={{ position: "absolute", right: 0 }}>
        9/22/2020
      </small>
    </div>
  );
};

export default Conversation;
