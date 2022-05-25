import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>

            <h1>Autumn Fields</h1>

            <div id="lineBreakTop"></div>

            <Navigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></Navigation>

        </header>
    );
}

export default Header;