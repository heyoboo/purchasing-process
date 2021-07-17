import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Help = ({ history }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <h1 className="title is-1">HELP page</h1>
      <p>
        This is page. This is page. This is page. This is page. This is page.
      </p>
    </div>
  );
};

export default Help;
