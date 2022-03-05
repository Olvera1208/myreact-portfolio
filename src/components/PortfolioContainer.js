import React, { useState } from "react";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import NavBar from "./NavBar";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
//render page
  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}