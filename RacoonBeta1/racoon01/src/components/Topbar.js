import React, { useState } from "react";

function Topbar() {
  /*this part is a useState so just to remember search is for read and setsearch for write from the user*/
  const [search, setSearch] = useState("");

  return (
    <header className="topbar">
      <div className="search-box">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search for a place, game or player..."
          value={search}
          /*in this part every type user write or search somthing in the search bar React update the page */
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="topbar-icons">
        <button>🔔</button>
        <button>✉️</button>
        <button>🦝</button>
      </div>
    </header>
  );
}

export default Topbar;
