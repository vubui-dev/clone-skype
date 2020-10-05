import { useConversationContext } from "contexts/useConversationContext";
import { useUserContext } from "contexts/useUserContext";
import React from "react";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import "./DashboardUser.css";

export const DashboardUser = () => {
  const { recentUser } = useUserContext();
  const { toggleModalAddConversation } = useConversationContext();
  return (
    <div className="dashboard-user flex-grow-1 flex-column align-items-center justify-content-center d-none d-md-flex">
      <h1>Welcome, {recentUser && recentUser.name}</h1>
      <img src={recentUser && recentUser.urlAvatar} alt="" />
      <Form className="mt-3">
        <InputGroup className="dashboard-user-upto border-bottom d-flex justify-content-center align-items-center">
          <Input placeholder="Tell yours friend what you are feeling" />
          <InputGroupAddon addonType="append">
            <MdEdit size="1.4rem" style={{ cursor: "pointer" }} />
          </InputGroupAddon>
        </InputGroup>
      </Form>
      <div className="dashboard-user-btn" onClick={toggleModalAddConversation}>
        Start conversation
      </div>
      <small className="text-center">
        Search for someone to start chatting with or go to contacts to see who
        is available{" "}
      </small>

      <div className="dashboard-user-hint">
        <div style={{ fontWeight: 500 }}>
          You are signed in as <i>vubuidev@gmail.com.vn</i>
        </div>
        <div className="text-muted text-center">
          Try to <Link to="#">switch account</Link> if you do not see your
          contacts or conversation history
        </div>

        <Link className="" to="#">
          <strong>Learn more</strong>
        </Link>
      </div>
    </div>
  );
};
