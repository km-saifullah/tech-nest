const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");

const NavLink = ({ href, children }) => {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === href; // Compare the current path with the link's href

  return (
    <Link href={href}>
      <span className={isActive ? "active" : ""}>{children}</span>
    </Link>
  );
};

export default NavLink;
