import React from "react";
import './SideBar.css'

export const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <section className="user">
        <div className="userNickname">
          <h3>Username</h3>
        </div>
      </section>
    </aside>
  );
};
