import { useUserContext } from "contexts/useUserContext";
import React from "react";
import {
  BsCardImage,
  BsChevronRight,
  BsEnvelope,
  BsGift,
  BsPersonBoundingBox,
  BsPhone,
  BsX,
} from "react-icons/bs";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "./ModalUserInfo.css";

export const ModalUserInfo = () => {
  const {
    openModalInfoUser,
    toggleModalInfoUser,
    recentUser,
  } = useUserContext();

  return (
    <Modal isOpen={openModalInfoUser} toggle={toggleModalInfoUser}>
      <ModalHeader toggle={toggleModalInfoUser}>Your profile</ModalHeader>
      <ModalBody>
        <div className="info-user-item">
          <BsCardImage size="1.4rem" />
          <div>Profile picture</div>
          <div className="info-user-right">
            <BsChevronRight className="text-muted" />
          </div>
        </div>
        <div className="info-user-item">
          <BsPersonBoundingBox size="1.4rem" />
          <div>AWEChat name</div>
          <div className="info-user-right">{recentUser.name}</div>
        </div>
        <div className="info-user-item">
          <BsEnvelope size="1.4rem" />
          <div>Email</div>
          <div className="info-user-right">vubuidev@gmail.com</div>
        </div>
        <div className="info-user-item">
          <BsGift size="1.4rem" />
          <div>Birthday</div>
          <div className="info-user-right">20-10-1997</div>
        </div>
        <div className="info-user-item">
          <BsPhone size="1.4rem" />
          <div>Phone number</div>
          <div className="info-user-right">0338205969</div>
        </div>

        <div className="info-user-item">
          <BsX size="1.4rem" />
          <div>Close your account</div>
        </div>
      </ModalBody>
    </Modal>
  );
};
