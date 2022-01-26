import React from "react";
import Input from '../input/index'
import { BiMenu } from 'react-icons/bi'

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-collapse">
                <div className="control-input topbar-searcher">
                    <Input type="text" placeholder="Busca lo que deseas">
                        <img className="input-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png" />
                    </Input>
                </div>
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
