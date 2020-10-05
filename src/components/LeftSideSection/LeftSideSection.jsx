import ConversationList from "components/ConversationList/ConversationList";
import { ModalAddContact } from "components/ModalAddContact/ModalAddContact";
import { ModalAddConversation } from "components/ModalAddConversation/ModalAddConversation";
import { useContactContext } from "contexts/useContactContext";
import { useConversationContext } from "contexts/useConversationContext";
import React, { useState } from "react";
import {
  BsChatSquareQuote,
  BsFillBellFill,
  BsFillChatDotsFill,
  BsPersonPlus,
  BsPersonSquare,
  BsSearch,
} from "react-icons/bs";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import ContactList from "../ContactList/ContactList";
import UserInfo from "../UserInfo/UserInfo";
import "./LeftSideSection.css";

export const LeftSideSection = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const { toggleModalAddContact } = useContactContext();
  const {
    toggleModalAddConversation,
    recentConversation,
  } = useConversationContext();

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const renderContentMenu = () => {
    if (activeTab === "chats") {
      return <ConversationList />;
    } else if (activeTab === "contacts") {
      return <ContactList />;
    }
  };

  const renderButtonAddNew = () => {
    if (activeTab === "chats") {
      return (
        <div
          className="d-flex justify-content-center align-items-center  w-100 p-2 cursor-pointer border"
          style={{
            backgroundColor: "#fff",
            cursor: "pointer",
            borderRadius: "20px",
          }}
          onClick={toggleModalAddConversation}
        >
          <BsChatSquareQuote size="1.2rem" className="mr-2" />
          <div>New chat</div>{" "}
        </div>
      );
    } else if (activeTab === "contacts") {
      return (
        <div
          className=" d-flex justify-content-center align-items-center  w-100 p-2 cursor-pointer border"
          style={{
            backgroundColor: "#fff",
            cursor: "pointer",
            borderRadius: "20px",
          }}
          onClick={toggleModalAddContact}
        >
          <BsPersonPlus size="1.2rem" className="mr-2" />
          <div>New contact</div>{" "}
        </div>
      );
    }
  };

  return (
    <div
      className={`left-side border-right ${
        recentConversation && "d-none d-md-block"
      }`}
    >
      <UserInfo />
      {/* Form search people */}
      <Form>
        <FormGroup>
          <InputGroup className="pt-3 px-2">
            <Input />
            <InputGroupAddon addonType="append">
              <Button color="primary">
                <BsSearch />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>

      <div className="menu-section">
        <div
          className={`menu-list d-flex justify-content-around px-2 py-2 border-bottom`}
        >
          <div
            className={`menu-item d-flex flex-column align-items-center ${
              activeTab === "chats" && "menu-item--active"
            }`}
            onClick={() => toggleTab("chats")}
          >
            <BsFillChatDotsFill size="1.2rem" />
            <div>Chats</div>
          </div>
          <div
            className={`menu-item d-flex flex-column align-items-center ${
              activeTab === "contacts" && "menu-item--active"
            }`}
            onClick={() => toggleTab("contacts")}
          >
            <BsPersonSquare size="1.2rem" />
            <div>Contacts</div>
          </div>
          <div
            className={`menu-item d-flex flex-column align-items-center ${
              activeTab === "notifications" && "menu-item--active"
            }`}
            onClick={() => toggleTab("notifications")}
          >
            <BsFillBellFill size="1.2rem" />
            <div>Notices</div>
          </div>
        </div>

        <div className="btn-add-new px-2 py-3">{renderButtonAddNew()}</div>
        <div className="show-content"></div>
        <Row>
          <Col sm="12">{renderContentMenu()}</Col>
        </Row>
        <ModalAddContact />
        <ModalAddConversation />
      </div>
    </div>
  );
};
