import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    listStyle: "none",
    padding: "0",
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/user" style={linkStyle}>Users</Link>
          </li>
          <li>
            <Link to="/input" style={linkStyle}>Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
