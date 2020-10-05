import Contact from "components/ContactList/Contact/Contact";
import { useConversationContext } from "contexts/useConversationContext";
import { useUserContext } from "contexts/useUserContext";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ContactList.css";

const ContactList = (props) => {
  const { recentConversation, chooseContactToChat } = useConversationContext();
  const { recentUser } = useUserContext();

  const { contacts } = recentUser;
  return (
    <ListGroup className="contact-list" flush>
      {contacts.map((contact) => (
        <ListGroupItem
          key={contact.id}
          className={`contact-item border-0 ${
            recentConversation &&
            recentConversation.otherContact.id === contact.id &&
            "contact-item--active"
          }`}
          onClick={() => chooseContactToChat(contact)}
        >
          <Contact nameContact={contact.name} urlAvatar={contact.urlAvatar} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ContactList;
