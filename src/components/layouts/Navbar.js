import Container from "./Wrapper";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const activeClassName = {
    fontWeight: "bold",
  };

  return (
    <div className="py-3.5 bg-yellow-500">
      <Container>
        <div className="flex items-center gap-x-5">
          <Link to="/">
            <h1 className="font-bold text-2xl">NOTE APP</h1>
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Create
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
