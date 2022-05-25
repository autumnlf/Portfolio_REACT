import './App.css';
import React, { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';

function App() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const pageRender = () => {
        switch (currentPage) {
            case "AboutMe":
                return <AboutMe />;
            case "MyWork":
                return <MyWork />;
            case "ContactMe":
                return <ContactMe />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>{pageRender()}</main>
            <Footer />
        </div>

    );
}

export default App;
