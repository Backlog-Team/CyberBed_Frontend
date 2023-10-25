import React, { useContext, useEffect, useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { User } from "./User/User";
import './SideBar.css'
import { Logout } from "./Logout/Logout";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginPopUp from "../../LoginPopUp";
import { Axios } from "axios";
import axios from "../../../api/axios";

export const SideBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="sidebar p-2 h-100">
      <Container className="sidebarInner h-100 d-flex flex-column">
        <User />
        <Navigation />
        <Logout />
        <LoginPopUp />
      </Container>
    </Navbar>
  );
};
