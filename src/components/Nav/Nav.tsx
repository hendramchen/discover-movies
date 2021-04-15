import React, { FunctionComponent } from "react";

const Nav: FunctionComponent = ({ children }) => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">{children}</ul>
    </nav>
  );
};

export default Nav;
