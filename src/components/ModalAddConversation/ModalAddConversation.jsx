import ContactList from "components/ContactList/ContactList";
import { useConversationContext } from "contexts/useConversationContext";
import React from "react";
import { BsPeopleFill, BsSearch } from "react-icons/bs";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./ModalAddConversation.css";

export const ModalAddConversation = () => {
  const {
    openModalAddConversation,
    toggleModalAddConversation,
    methodAddConversation,
    setMethodAddConversation,
  } = useConversationContext();

  const renderHeaderOfModal = () => {
    if (methodAddConversation === "") {
      return "Create new conversation";
    } else if (methodAddConversation === "group-chat") {
      return "Choose contacts to start conversation";
    }
  };

  const renderBodyOfModal = () => {
    if (methodAddConversation === "") {
      return (
        <div>
          <div className="">
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input placeholder="Search contact" />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">
                      <BsSearch />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
            <h5>Choose a contact to start conversation</h5>
            <div
              className="contact-list overflow-auto"
              style={{ maxHeight: 300 }}
            >
              <ContactList />
            </div>
          </div>
          <h4 className="mt-3">Other way to start conversation</h4>
          <div
            className="create-method-btn d-flex align-items-center"
            onClick={() => setMethodAddConversation("group-chat")}
          >
            <div
              style={{ backgroundColor: "#d6e0f0", width: 40, height: 40 }}
              className="d-flex align-items-center justify-content-center rounded-circle"
            >
              <BsPeopleFill size="1.2rem" />
            </div>
            <div className="ml-3">
              <div style={{ fontWeight: 600 }}>Create a group chat</div>
              <small className="d-block">
                Choose contacts to start conversation
              </small>
            </div>
          </div>
        </div>
      );
    } else if (methodAddConversation === "group-chat") {
      return (
        <div>
          <Form>
            <FormGroup>
              <Input placeholder="Enter name of group"></Input>
            </FormGroup>

            <h5>Choose contacts to start conversation</h5>

            <FormGroup>
              <InputGroup>
                <Input placeholder="Search contact" />
                <InputGroupAddon addonType="append">
                  <Button color="primary">
                    <BsSearch />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
          <div
            className="contact-list overflow-auto"
            style={{ maxHeight: 300 }}
          >
            <ContactList />
          </div>
        </div>
      );
    }
  };

  const renderButtonOfFooter = () => {
    if (methodAddConversation === "group-chat") {
      return (
        <Button color="secondary" onClick={() => setMethodAddConversation("")}>
          Back
        </Button>
      );
    }
  };

  return (
    <Modal
      isOpen={openModalAddConversation}
      toggle={toggleModalAddConversation}
    >
      <ModalHeader toggle={toggleModalAddConversation}>
        {renderHeaderOfModal()}
      </ModalHeader>
      <ModalBody>{renderBodyOfModal()}</ModalBody>
      {methodAddConversation && (
        <ModalFooter>{renderButtonOfFooter()}</ModalFooter>
      )}{" "}
    </Modal>
  );
};
