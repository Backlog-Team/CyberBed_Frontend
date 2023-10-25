import React from "react";
import { Feed } from "./Feed/Feed";
import { SideBar } from "./SideBar/SideBar";

export const MainBlock: React.FC = () => {
  return (
    <main className="row" style={{ height: "100%" }}>
      <div className="sidebar" style={{ height: "100%" }}>
        <SideBar />
      </div>
      <div className="float-end" style={{ marginLeft: "25%" }}>
        <Feed />
      </div>
    </main>
  );
};
