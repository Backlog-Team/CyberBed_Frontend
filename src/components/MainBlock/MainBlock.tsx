import React from "react";
import { Feed } from "./Feed/Feed";
import { SideBar } from "./SideBar/SideBar";

export const MainBlock: React.FC = () => {
  return (
    <main className="d-flex flex-row" style={{ height: "100%" }}>
      <div className="sidebar" style={{ width: "30%", height: "100%" }}>
        <SideBar />
      </div>
      <div style={{ marginLeft: "280px" }}>
        <Feed />
      </div>
    </main>
  );
};
