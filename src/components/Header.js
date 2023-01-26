import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[15vh] w-full bg-[#F5F5F5]">
            <div className="flex space-x-3 ml-16">
                <h1>Logo</h1>
                <h1>Nom de l'Ei</h1>
            </div>
            <div>
                <ul className="flex space-x-10 text-[#919191] mr-5">
                    <NavLink to={"/"} className={activePage("/")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to={"/about"} className={activePage("about")}>
                        <li>A propos</li>
                    </NavLink>
                    <NavLink to={"/work"} className={activePage("work")}>
                        <li>Préstations</li>
                    </NavLink>
                    <NavLink to={"/projects"} className={activePage("projects")}>
                        <li>Projets</li>
                    </NavLink>
                    <NavLink to={"/contact"} className={activePage("contact")}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

const checkActive = (match) => {
    if (match === "/")
        return document.URL.charAt(document.URL.length - 1) === match;
    return document.URL.split("/")[document.URL.split("/").length - 1] === match;
};
const activePage = (match) => {
    if (checkActive(match))
        return "text-[#919191]";
    return "text-[#919191] hover:text-gray-300";
}
export default Header;