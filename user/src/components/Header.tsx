import React from "react";
import "./Header.css";
import { Search } from "lucide-react";

function Header() {
  return (
    <div
      className="w-full h-20"
      style={{ background: "linear-gradient(to right, #565bcf, #a4a7ef)" }}
    >
      <header className="chat-header">
        {/* Search Section */}
        <div className="search-section">
          <input
            type="text"
            className="search-bar"
            placeholder="Search contact, group, or message"
          />
          <button className="search-btn">
            <Search size={25} />
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="user-info">
            <img
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              alt="User Avatar"
              className="avatar"
            />
            <div className="user-name">
              <h4>Sankar Dev</h4>
              <span className="user-status">Online</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
