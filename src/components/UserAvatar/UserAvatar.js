import React from "react";
import avatar from "../../avatar.jpg";
import "./UserAvatar.css";

const UserAvatar = ({ urlAvatar }) => {
  return (
    <div className="user-avatar">
      <img
        src={urlAvatar ? urlAvatar : avatar}
        alt=""
        className="rounded-circle "
        width="50"
        height="50"
      />
      <div className="" className="user-status"></div>
    </div>
  );
};


export default UserAvatar;
