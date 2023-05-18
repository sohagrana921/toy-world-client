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
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allToys">All Toys</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/mytoys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/addtoy">Add A Toy</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 my-4 my-container">
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
            className="h-16"
            src="https://i.ibb.co/ZgBh5qr/XDvdbzd0-400x400.jpg"
            alt=""
          />
        </Link>
        <Link to="/">
          <p className="btn btn-ghost normal-case text-xl font-bold text-orange-500">
            Toy World
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <Link onClick={handleLogOut} className="my-btn">
              Logout
            </Link>

            <div className="tooltip" data-tip={user.displayName || name}>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 tooltip">
                  <img src={user.photoURL || photo} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="my-btn mr-4">
              Login
            </Link>
            <Link to="/register" className="my-btn ">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
