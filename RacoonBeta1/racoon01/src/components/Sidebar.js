import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">🦝</div>

      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          Games
        </NavLink>

        <NavLink
          to="/places"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          Places
        </NavLink>

        <NavLink
          to="/nfc-tags"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          NFC Tags
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          Analytics
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          Settings
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
