import React from "react";
import { SideBar } from "./SideBar/SideBar";

export const MainBlock: React.FC = () => {
  return (
    <main style={{"height": "100%"}}>
      <div className="sidebar" style={{"width": "30%", "height": "100%"}}>
        <SideBar />
      </div>
    </main>
  );
}
