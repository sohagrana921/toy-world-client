import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, photo, name } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut();
  };

  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "font-semibold"
          }
        >
          All Toys
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/mytoys"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-semibold" : "font-semibold"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addtoy"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-semibold" : "font-semibold"
              }
            >
              Add Toy
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "font-semibold"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  my-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/">
          <img
            className="h-12 rounded-full"
            src="https://i.ibb.co/ZgBh5qr/XDvdbzd0-400x400.jpg"
            alt=""
          />
          <p className="font-bold">Toy World</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal text-black">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <Link onClick={handleLogOut} className="btn btn-sm btn-primary">
              Logout
            </Link>

            <div className="tooltip" data-tip={user.displayName || name}>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 tooltip">
                  <img src={user.photoURL || photo} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-primary ">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
