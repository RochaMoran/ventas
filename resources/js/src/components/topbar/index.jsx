import React, { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import ControlInput from "../controlInput";
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/index'

export default function TopBar() {
    const [show, setShow] = useState(false)
    const { logout, jwt } = useUser()

    return (
        <div className="topbar">
            <div className="topbar-collapse">
                <ControlInput cls="topbar-searcher">
                    <BiSearch className="input-icon" />
                </ControlInput>
                <button className="button topbar-profile" onClick={() => setShow(v => !v)}>
                    <img
                        className="topbar-profile__image"
                        src="http://pm1.narvii.com/6387/4e488e2c675743449bd9ad4eeed980d6d62231d1_00.jpg"
                        alt="steven-universe"
                    />
                    <div className="topbar-profile__content">
                        <p className="topbar-profile__name">{jwt && jwt.name || jwt.data.name}</p>
                        <span className="topbar-profile__role">role</span>
                    </div>
                </button>
                <div className={show ? "topbar-dropOptions" : "topbar-dropOptions__hidden"}>
                    <ul>
                        <li>
                            <Link to="/">Editar perfile</Link>
                        </li>
                        <li>
                            <Link to="/">Configuraciones</Link>
                        </li>
                        <li>
                            <button onClick={() => logout()}>
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
