import React, { useContext, useState } from "react";

const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [openModalAddContact, setOpenModalAddContact] = useState(false);

  // Adding method
  const [methodAddContact, setMethodAddContact] = useState("");

  const toggleModalAddContact = () => {
    setOpenModalAddContact((prev) => !prev);
    setMethodAddContact("");
  };

  const valueContactContext = {
    openModalAddContact,
    toggleModalAddContact,
    methodAddContact,
    setMethodAddContact,
  };
  return (
    <ContactContext.Provider value={valueContactContext}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
