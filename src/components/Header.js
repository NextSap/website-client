import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[15vh] w-full bg-[#F5F5F5] fixed">
            <div className="flex space-x-3 ml-32 h-[100%]">
                <img src={require("../assets/logo.png")}/>
            </div>
            <div>
                <ul className="flex space-x-10 text-[#919191] mr-5">
                    <NavLink to={"/"} className={activePage("/")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to={"/about"} className={activePage("about")}>
                        <li>À propos</li>
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
        return "text-[#BD9571]";
    return "text-[#919191] duration-300 hover:text-[#CEA27B]";
}
export default Header;