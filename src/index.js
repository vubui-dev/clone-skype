import "bootstrap/dist/css/bootstrap.min.css";
import { ContactProvider } from "contexts/useContactContext";
import { ConversationProvider } from "contexts/useConversationContext";
import { UserProvider } from "contexts/useUserContext";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <UserProvider>
        <ContactProvider>
          <ConversationProvider>
            <App />
          </ConversationProvider>
        </ContactProvider>
      </UserProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
