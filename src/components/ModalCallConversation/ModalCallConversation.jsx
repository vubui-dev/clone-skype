import { useConversationContext } from "contexts/useConversationContext";
import { useUserContext } from "contexts/useUserContext";
import React from "react";
import { MdCall, MdCallEnd, MdVideocam } from "react-icons/md";
import { Modal, ModalBody } from "reactstrap";
import "./ModalCallConversation.css";

export const ModalCallConversation = () => {
  const {
    recentConversation,
    openModalCallConversation,
    toggleModalCallConversation,
    methodCall,
    recentCallConversation,
    pickCallConversation,
  } = useConversationContext();

  const { recentUser } = useUserContext();

  return (
    <Modal
      className={`${recentCallConversation.status && "modal-calling"} `}
      isOpen={openModalCallConversation}
      style={{
        minHeight: 400,
        width: recentCallConversation.status === false ? 300 : null,
      }}
    >
      <ModalBody className="d-flex justify-content-center align-items-center">
        {recentCallConversation.status === false && (
          <div
            className="calling-wrapper d-flex flex-column align-items-center justify-content-between px-2 py-4"
            style={{ minHeight: 400, width: 300 }}
          >
            <div className="d-flex flex-column align-items-center ">
              <img
                className="rounded-circle img-fluid"
                src={recentUser.urlAvatar}
                alt=""
                width="70px"
                height="70px"
              />
              <p className="mt-3 text-primary">
                <strong>You</strong> is calling{" "}
                <strong>{recentConversation.otherContact.name}</strong>
              </p>
            </div>
            <div className="btn-call-wrapper d-flex justify-content-around w-100">
              <div
                className="btn-call-ctrl bg-danger"
                onClick={toggleModalCallConversation}
              >
                <MdCallEnd />
              </div>
              <div
                className="btn-call-ctrl bg-primary"
                onClick={pickCallConversation}
              >
                {methodCall === "video-call" ? <MdVideocam /> : <MdCall />}
              </div>
            </div>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};
