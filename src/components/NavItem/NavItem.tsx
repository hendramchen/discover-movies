import { NavLink } from "react-router-dom";
interface INavItem {
  href: string;
  isActive?: boolean;
  exact?: boolean;
  children: any;
}
export default function NavItem({
  href,
  isActive = false,
  exact = false,
  children,
}: INavItem) {
  return (
    <li
      className={`block px-4 py-2 rounded-md ${
        isActive ? "bg-amber-100 text-amber-700" : ""
      }`}
    >
      <NavLink
        to={href}
        exact={exact}
        // activeClassName={classes.active}
      >
        {children}
      </NavLink>
    </li>
  );
}
