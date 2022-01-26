import React from "react";
import { BiSearch } from 'react-icons/bi'
import ControlInput from "../controlInput";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-collapse">
                <ControlInput cls="topbar-searcher">
                    <BiSearch className="input-icon" />
                </ControlInput>
                <div className="topbar-profile">
                    <img
                        className="topbar-profile__image"
                        src="http://pm1.narvii.com/6387/4e488e2c675743449bd9ad4eeed980d6d62231d1_00.jpg"
                        alt="steven-universe"
                    />
                    <div className="topbar-profile__content">
                        <p className="topbar-profile__name">Steven Rocha</p>
                        <span className="topbar-profile__role">Administrador</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
