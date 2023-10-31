import { useState } from "react";
import TeamsDropdown from "./TeamsDropdown";

function Teams() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="teams navtab"
      onMouseEnter={handleDropdownOpen}
      onMouseLeave={handleDropdownClose}
    >
      <div className="navtab-text teams-text">
        <div className="">Teams</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
          </svg>
        </div>
      </div>
      {isDropdownOpen && <TeamsDropdown />}
    </div>
  );
}

export default Teams;
