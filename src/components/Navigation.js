import React from "react";

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav id="navBar">
            <a href="#aboutMe" className={currentPage === "aboutMe" ? "navActive" : "nav"} onClick={() => setCurrentPage("aboutMe")}>
                About Me</a>
            <a href="#myWork" className={currentPage === "myWork" ? "navActive" : "nav"} onClick={() => setCurrentPage("myWork")}>
                Work</a>
            <a href="#contactMe" className={currentPage === "contactMe" ? "navActive" : "nav"} onClick={() => setCurrentPage("contactMe")}>
                Contact</a>
            <a href="https://www.autumnlfields.com/_files/ugd/214778_b39b42608dda44888d1e3040081bdbfe.pdf"
                target="blank" className={currentPage === "contactMe" ? "navActive" : "nav"} onClick={() => setCurrentPage("contactMe")}>
                Resume</a>
        </nav>
    );
}

export default Navigation;