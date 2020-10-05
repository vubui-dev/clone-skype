import UserAvatar from "components/UserAvatar/UserAvatar";
import React from "react";
import "./Contact.css";

const Contact = ({ nameContact, urlAvatar }) => {
  return (
    <div className="contact d-flex align-items-center">
      <UserAvatar urlAvatar={urlAvatar} />
      <span className="ml-2">{nameContact}</span>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
