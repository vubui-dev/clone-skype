import { ModalCallConversation } from "components/ModalCallConversation/ModalCallConversation";
import { ModalCallingConversation } from "components/ModalCallingConversation/ModalCallingConversation";
import { useConversationContext } from "contexts/useConversationContext";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import React, { useState } from "react";
import {
  BsArrowLeft,
  BsCameraVideo,
  BsMic,
  BsThreeDotsVertical,
  BsX,
} from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Message from "./Message/Message";
import "./OpenConversation.css";

const OpenConversation = (props) => {
  const {
    recentConversation,
    sendMessage,
    toggleModalCallConversation,
    methodCall,
    setMethodCall,
    recentCallConversation,
    finishConversation,
  } = useConversationContext();
  const [textMessage, setTextMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleOnChangeText = (e) => {
    setTextMessage(e.target.value);
  };

  function handleSubmitMessage(event) {
    event.preventDefault();
    sendMessage(textMessage);
    setTextMessage("");
  }

  const toggleEmoji = () => {
    setOpenEmoji((prev) => !prev);
  };

  const selectEmoji = (e) => {
    setTextMessage((prev) => prev + e.native);
    setTimeout(() => toggleEmoji(), 100);
  };
  return (
    <div className={`d-flex flex-column flex-grow-1 ${""}`}>
      {/* header for showing information of conversation */}
      <div className="header-conversation px-2 px-sm-4 px-md-5 py-2 py-sm-2 border-bottom d-flex align-items-center position-relative">
        <BsArrowLeft
          onClick={finishConversation}
          size="1.6rem"
          className={`${recentConversation ? "d-md-none" : ""} mr-4`}
          style={{ cursor: "pointer" }}
        />{" "}
        <div>
          <h4 className="mb-0">{recentConversation.otherContact.name}</h4>
          <small className="text-muted">Last seem 11m ago</small>
        </div>
        <div
          onClick={finishConversation}
          className="btn-close d-none d-md-flex"
          style={{ position: "absolute", right: "1rem", cursor: "pointer" }}
        >
          <BsX size="1.8rem" />
        </div>
      </div>

      {/* Wrapper for showing messages of conversation */}
      <div className="show-messages flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-2 px-sm-4 px-md-5">
          {recentConversation &&
            recentConversation.messages.map((message, index) => {
              const isLastMessage =
                index === recentConversation.messages.length - 1;

              return (
                <Message
                  isLastMessage={isLastMessage}
                  key={index}
                  textMessage={message.message}
                  sender={message.sender}
                />
              );
            })}
        </div>
      </div>
      {/* Form for input message */}
      <Form
        className="w-100 py-2 py-sm-4 px-2 px-sm-4 px-md-5"
        onSubmit={handleSubmitMessage}
        autoComplete="off"
      >
        <FormGroup className="m-0">
          {openEmoji && (
            <Picker set="apple" showPreview={false} onSelect={selectEmoji} />
          )}
          <div className="d-flex w-100">
            <div className="input-message border w-100">
              <div className="input-emoji">
                <VscSmiley size="1.8rem" onClick={toggleEmoji} />
              </div>

              <Input
                required
                autoComplete="off"
                className="flex-grow-1"
                name="message-text"
                onChange={handleOnChangeText}
                value={textMessage}
              />
            </div>

            <div className="btn-chat-list ">
              <Button
                color="primary"
                className="rounded-circle ml-2"
                style={{ padding: 0, width: 42, height: 42 }}
              >
                <RiSendPlane2Fill size="20px" />
              </Button>
              <div
                className="rounded-circle ml-2"
                onClick={() => {
                  setMethodCall("video-call");
                  toggleModalCallConversation();
                }}
              >
                <BsCameraVideo size="20px" />
              </div>
              <div
                className="rounded-circle ml-2"
                onClick={() => {
                  setMethodCall("voice-call");
                  toggleModalCallConversation();
                }}
              >
                <BsMic size="20px" />
              </div>
              <div className="rounded-circle ml-2">
                <BsThreeDotsVertical size="20px" />
              </div>
            </div>
          </div>
        </FormGroup>
      </Form>

      {methodCall && <ModalCallConversation />}
      {recentCallConversation.status === true && <ModalCallingConversation />}
    </div>
  );
};

OpenConversation.propTypes = {};

export default OpenConversation;
