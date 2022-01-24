import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./data";

export default function Rutas() {
    return (
        <Router>
            <Routes>
                {routes.auth.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Routes>
        </Router>
    );
}
