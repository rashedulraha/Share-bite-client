import { NavLink } from "react-router-dom";

const Menu = ({ to, label }) => {
  return (
    <NavLink
      to={`/${to}`}
      className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
      {label}
    </NavLink>
  );
};

export default Menu;
