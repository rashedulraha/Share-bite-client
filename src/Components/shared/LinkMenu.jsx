import React from "react";
import { Link } from "react-router-dom";

const LinkMenu = ({ to, label, Icon }) => {
  return (
    <Link
      to={`/${to}`}
      className="flex text-sm md:text-base items-center gap-3 hover:bg-primary/10 hover:text-primary transition-colors rounded-sm py-1  px-2 capitalize">
      {Icon && <Icon className="text-base-content " />}
      {label}
    </Link>
  );
};

export default LinkMenu;
