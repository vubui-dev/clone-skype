import { ModalUserInfo } from "components/ModalUserInfo/ModalUserInfo";
import UserAvatar from "components/UserAvatar/UserAvatar";
import { useUserContext } from "contexts/useUserContext";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "./UserInfo.css";

const UserInfo = (props) => {
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    openModalInfoUser,
    toggleModalInfoUser,
    recentUser,
  } = useUserContext();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="user-info">
      <div
        className="user-avatar d-flex align-items-center"
        onClick={toggleModalInfoUser}
      >
        <UserAvatar urlAvatar={recentUser && recentUser.urlAvatar} />
        <div className="user-name ml-2 ">{recentUser && recentUser.name}</div>
      </div>
      <Dropdown
        className="user-options"
        direction="right"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle tag="div">
          <BsThreeDots size="1.4rem" />
        </DropdownToggle>
        <DropdownMenu className="user-options">
          <small
            className="d-block p-2"
            onClick={() => {
              toggleModalInfoUser();
              toggle();
            }}
          >
            Setting
          </small>
          <small className="d-block p-2" onClick={toggle}>
            Help and feedback
          </small>
          <small className="d-block p-2" onClick={toggle}>
            Change mode
          </small>
          <small
            className="d-block p-2"
            onClick={() => {
              localStorage.setItem("userAweChat", "");
              history.push("/login");
            }}
          >
            Sign out
          </small>
        </DropdownMenu>
      </Dropdown>

      {openModalInfoUser && <ModalUserInfo />}
    </div>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
