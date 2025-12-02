import { NavLink } from "react-router-dom";

const Menu = ({ to, label, Icon }) => {
  return (
    <NavLink
      to={`/${to}`}
      className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
      {Icon && <Icon className="text-base-content text-base " />}
      {label}
    </NavLink>
  );
};

export default Menu;
