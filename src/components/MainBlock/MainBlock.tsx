import React from "react";
import { SideBar } from "./SideBar/SideBar";

export const MainBlock: React.FC = () => {
  return (
    <main style={{"height": "100%"}}>
      <div style={{"width": "260px", "height": "100%"}}>
        <SideBar />
      </div>
    </main>
  );
}
