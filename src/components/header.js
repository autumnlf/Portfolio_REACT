import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <Header>
            <div>
                <h1>Autumn Fields</h1>
            </div>
            <div id="lineBreakTop"></div>
            <div>
                <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Navigation>
            </div>
        </Header>
    );
}

export default Header;