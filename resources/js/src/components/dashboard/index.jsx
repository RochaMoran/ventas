import React from "react";
import NavBar from "../navbar/index";
import TopBar from "../topbar/index";

export default function Dashboard({ children }) {
    return (
      <div className="dashboard">
        <TopBar />
        <NavBar />
        <div className="dashboard-main">
          <main>
            {children}
          </main>
        </div>
      </div>
    );
}
