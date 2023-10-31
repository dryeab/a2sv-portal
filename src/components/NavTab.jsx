import React from "react";

function NavTab(props) {
  return (
    <>
      <div className="navtab">
        <div className="navtab-text">{props.text}</div>
        <div
          className={`navtab-slidder ${props.focused ? "navtab-focused" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default NavTab;
