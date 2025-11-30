import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

var menuSelected = false;

const MENU_LENGTH_MAX = 10;
const MENU_ITEM_ABOUT_POS_MAX = 5;
const MENU_ITEM_EXPERIENCE_POS_MAX = 9;
const MENU_ITEM_WORK_POS_MAX = 13
const MENU_ITEM_RESUME_POS_MAX = 17;
const MENU_SYMBOL_ROTATE_ANGLE_MAX = 180;

function menuSelect() {
    let menuSymbol = document.getElementById("menu-symbol"),
    menuList = document.getElementById("menu-container"),

    aboutLink = document.getElementById("about-link"),
    experienceLink = document.getElementById("experience-link"),
    workLink = document.getElementById("work-link"),
    resumeLink = document.getElementById("resume-link");

    menuSymbol.classList.add("animate-symbol-click");
    menuSymbol.addEventListener('animationend', () => {
        menuSymbol.classList.remove("animate-symbol-click");
    });

    let menuLengthTarget = menuSelected ? 0 : MENU_LENGTH_MAX,
    aboutPosTarget = menuSelected ? 0 : MENU_ITEM_ABOUT_POS_MAX,
    experiencePosTarget = menuSelected ? 0 : MENU_ITEM_EXPERIENCE_POS_MAX,
    workPosTarget = menuSelected ? 0 : MENU_ITEM_WORK_POS_MAX,
    resumePosTarget = menuSelected ? 0 : MENU_ITEM_RESUME_POS_MAX,
    symbolAngleTarget = menuSelected ? 0 : MENU_SYMBOL_ROTATE_ANGLE_MAX;

    menuSymbol.style.webkitTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.mozTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.oTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.msTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.transform = "rotate("+symbolAngleTarget+"deg)";

    menuList.style.mozTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.oTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.msTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.transform = "scale(1, "+menuLengthTarget+")";

    aboutLink.style.webkitTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.mozTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.oTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.msTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.transform = "translate(0px, "+aboutPosTarget+"rem)";

    experienceLink.style.webkitTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.mozTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.oTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.msTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.transform = "translate(0px, "+experiencePosTarget+"rem)";

    workLink.style.webkitTransform = "translate(0px, "+workPosTarget+"rem)";
    workLink.style.mozTransform = "translate(0px, "+workPosTarget+"rem)";
    workLink.style.oTransform = "translate(0px, "+workPosTarget+"rem)";
    workLink.style.msTransform = "translate(0px, "+workPosTarget+"rem)";
    workLink.style.transform = "translate(0px, "+workPosTarget+"rem)";

    resumeLink.style.webkitTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.mozTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.oTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.msTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.transform = "translate(0px, "+resumePosTarget+"rem)";

    menuSelected = !menuSelected;
}

function navBarClick() {
    let title = document.getElementById("name-title"),
    container = document.getElementById("navbar-container");

    title.classList.add("animate-title-click");
    container.classList.add("light-navbar");

    title.addEventListener('animationend', () => {
        title.classList.remove("animate-title-click");
        container.classList.remove("light-navbar");
    });

    if (menuSelected) {
        menuSelect();
    }
}

function selectAbout() {
    let aboutLink = document.getElementById("about-link");

    aboutLink.classList.add("animate-menu-item-click");
    aboutLink.addEventListener('animationend', () => {
        aboutLink.classList.remove("animate-menu-item-click");
    });

    if (menuSelected) {
        menuSelect();
    }
}

function selectExperience() {
    let experienceLink = document.getElementById("experience-link");

    experienceLink.classList.add("animate-menu-item-click");
    experienceLink.addEventListener('animationend', () => {
        experienceLink.classList.remove("animate-menu-item-click");
    });

    if (menuSelected) {
        menuSelect();
    }
}

function selectWork() {
    let experienceLink = document.getElementById("experience-link");

    experienceLink.classList.add("animate-menu-item-click");
    experienceLink.addEventListener('animationend', () => {
        experienceLink.classList.remove("animate-menu-item-click");
    });

    if (menuSelected) {
        menuSelect();
    }
}

function selectResume() {
    let resumeLink = document.getElementById("resume-link");

    resumeLink.classList.add("animate-menu-item-click");
    resumeLink.addEventListener('animationend', () => {
        resumeLink.classList.remove("animate-menu-item-click");
    });

    if (menuSelected) {
        menuSelect();
    }
    window.open("res/resume.pdf");
}

function NavBar() {
    return (
        <div id = "navbar-component">
            <div id = "navbar-container">
                <div id = "title-panel" onClick={navBarClick} onKeyPress = {navBarClick} tabIndex="0" role="button">
                    <Link id="name-title" to="/"><h1>ROHAN UPPONI</h1></Link>
                </div>
                <div id = "menu-panel" onClick = {menuSelect} onKeyPress = {menuSelect} tabIndex="0" role="button">
                    <h1 id = "menu-symbol" className = "unselectable">{'\u2630'}</h1>
                </div>
            </div>
            <div id = "menu-container"></div>
            <ul id = "menu-list">
                <li id = "about-link" className = "list-link unselectable">
                    <span className = "list-link-span" onClick = {selectAbout} onKeyPress = {selectAbout} tabIndex="0" role="button"><Link to="/about" className="no-link">ABOUT</Link></span>
                </li>
                <li id = "experience-link" className = "list-link unselectable">
                    <span className = "list-link-span" onClick = {selectExperience} onKeyPress = {selectExperience} tabIndex="0" role="button"><Link to="/experience" className="no-link">EXPERIENCE</Link></span>
                </li>
                <li id = "work-link" className = "list-link unselectable">
                    <span className = "list-link-span" onClick = {selectWork} onKeyPress = {selectWork} tabIndex="0" role="button"><Link to="/work" className="no-link">WORK</Link></span>
                </li>
                <li id = "resume-link" className = "list-link unselectable">
                    <span className = "list-link-span" onClick = {selectResume} onKeyPress = {selectResume} tabIndex="0" role="button">RESUME</span>
                </li>
            </ul>
        </div>
    )
}


export default NavBar;