import React from "react";
import NavBar from "../navbar/index";
import TopBar from "../topbar/index";

export default function Dashboard({ main_cls, children }) {
    return (
      <div className="dashboard">
        <TopBar />
        <NavBar />
        <div className={"dashboard-main " + main_cls}>
          <main>
            {children}
          </main>
        </div>
      </div>
    );
}
