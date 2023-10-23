import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { User } from "./User/User";
import './SideBar.css'

export const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <section className="sidebarTop">
        <User />
        <Navigation />
      </section>

      <section className="sidebarBottom">
        <button>Exit</button>
      </section>
    </aside>
  );
};
