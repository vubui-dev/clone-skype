import { useContactContext } from "contexts/useContactContext";
import React from "react";
import { FaPhoneAlt, FaSkype } from "react-icons/fa";
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
import { AddContactByInviting } from "./AddContactByInviting/AddContactByInviting";
import { AddContactByPhone } from "./AddContactByPhone/AddContactByPhone";
import "./ModalAddContact.css";

export const ModalAddContact = () => {
  const {
    openModalAddContact,
    toggleModalAddContact,
    setMethodAddContact,
    methodAddContact,
  } = useContactContext();

  const renderAddMethod = () => {
    if (!methodAddContact) {
      return (
        <div className="contact-add-first">
          {" "}
          <div className="contact-search">
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input placeholder="Search people" />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
                <small className="px-3">
                  Search for people using their name, phone number, email.
                </small>
              </FormGroup>
            </Form>
          </div>
          <div className="contact-other-add mt-4">
            <h4>Other way to add contact</h4>
            {/*Add contact method add by inviting via email  */}
            <div
              className="contact-add-method d-flex align-items-center pt-2"
              onClick={() => setMethodAddContact("inviting")}
            >
              <div
                style={{ backgroundColor: "#d6e0f0", width: 40, height: 40 }}
                className="d-flex align-items-center justify-content-center rounded-circle"
              >
                <FaSkype size="1.2rem" />
              </div>
              <div className="d-flex flex-column ml-3">
                <div className="text-main">Invite friend to AWEChat</div>
                <small>
                  Invite friend to AWEChat via email, phone and more
                </small>
              </div>
            </div>

            {/*Add contact method by phone */}
            <div
              className="contact-add-method  d-flex align-items-center mt-3"
              onClick={() => setMethodAddContact("phone")}
            >
              <div
                style={{ backgroundColor: "#d6e0f0", width: 40, height: 40 }}
                className="d-flex align-items-center justify-content-center rounded-circle"
              >
                <FaPhoneAlt size="1.2rem" />
              </div>
              <div className="d-flex flex-column ml-3">
                <div className="text-main">Add a phone number</div>
                <small>Add contact via quick phone number</small>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (methodAddContact === "phone") {
      return <AddContactByPhone />;
    } else if (methodAddContact === "inviting") {
      return <AddContactByInviting />;
    }
  };

  const renderHeaderOfModalAddContact = () => {
    if (!methodAddContact) {
      return "Add new contact";
    } else if (methodAddContact === "phone") {
      return "Add phone number";
    } else if (methodAddContact === "inviting") {
      return "Share and connect";
    }
  };

  const renderButtonFooterModalAddContact = () => {
    if (methodAddContact === "phone") {
      return (
        <Button color="secondary" onClick={() => setMethodAddContact("")}>
          Back
        </Button>
      );
    } else if (methodAddContact === "inviting") {
      return (
        <Button color="secondary" onClick={() => setMethodAddContact("")}>
          Back
        </Button>
      );
    }
  };

  return (
    <Modal isOpen={openModalAddContact} toggle={toggleModalAddContact}>
      <ModalHeader toggle={toggleModalAddContact}>
        {renderHeaderOfModalAddContact()}
      </ModalHeader>
      <ModalBody>{renderAddMethod()}</ModalBody>
      {methodAddContact && (
        <ModalFooter>{renderButtonFooterModalAddContact()}</ModalFooter>
      )}
    </Modal>
  );
};
