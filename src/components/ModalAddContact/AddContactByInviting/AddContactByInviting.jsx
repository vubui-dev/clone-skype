import React from "react";
import { BiLinkAlt, BiMailSend } from "react-icons/bi";
import "./AddContactByInviting.css";

export const AddContactByInviting = () => {
  return (
    <div className="w-100">
      <p>
        Connect with anyone by sharing a link to your profile with them - even
        if they're not on AWEChat.
      </p>
      <div className="m-auto d-flex justify-content-center position-relative">
        <img
          className="rounded"
          src="https://images.pexels.com/photos/4432185/pexels-photo-4432185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          width="300"
          height="300"
        />
        <div
          className="position-absolute text-white d-flex justify-content-center align-items-center"
          style={{
            bottom: 0,
            width: 300,
            height: 50,
            background: "rgba(0,0,0, 0.5)",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          Vu Bui Tuan
        </div>
      </div>
      <div className="add-contact-invite-method d-flex mt-3 border-bottom p-2">
        <BiLinkAlt size="1.6rem" />
        <div className="ml-3">Copy link to share</div>
      </div>
      <div className="add-contact-invite-method d-flex mt-3 border-bottom p-2">
        <BiMailSend size="1.6rem" />
        <div className="ml-3">Send link via email</div>
      </div>
    </div>
  );
};
