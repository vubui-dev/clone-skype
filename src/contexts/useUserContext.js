import { data } from "mockdata";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();
  // login user and save info of current user
  const [recentUser, setRecentUser] = useState();

  // modal for showing info of current user
  const [openModalInfoUser, setOpenModalInfoUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem("userAweChat");
    if (user) {
      setRecentUser(JSON.parse(user));
    }
  }, []);

  const loginUser = (user) => {
    const userLogin = data.find(
      (contact) => contact.username === user.username
    );

    if (userLogin) {
      if (userLogin.password === user.password) {
        setRecentUser(userLogin);
        localStorage.setItem("userAweChat", JSON.stringify(userLogin));
        return true;
      }
      // else show login error
    } else {
      // show login error
      return false;
    }
  };

  const toggleModalInfoUser = () => {
    setOpenModalInfoUser((prev) => !prev);
  };

  const userContextValue = {
    openModalInfoUser,
    toggleModalInfoUser,
    recentUser,
    setRecentUser,
    loginUser,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
