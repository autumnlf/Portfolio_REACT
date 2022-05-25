import React from "react";

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav id="navBar">
            <a className={currentPage === "AboutMe" ? "navActive" : "nav"} onClick={() => setCurrentPage("AboutMe")}>
                About Me</a>
            <a className={currentPage === "MyWork" ? "navActive" : "nav"} onClick={() => setCurrentPage("MyWork")}>
                Work</a>
            <a className={currentPage === "ContactMe" ? "navActive" : "nav"} onClick={() => setCurrentPage("ContactMe")}>
                Contact</a>
            <a href="https://www.autumnlfields.com/_files/ugd/214778_b39b42608dda44888d1e3040081bdbfe.pdf"
                target="blank" className={currentPage === "ContactMe" ? "nav" : "nav"} onClick={() => setCurrentPage("ContactMe")}>
                Resume</a>
        </nav>
    );
}

export default Navigation;