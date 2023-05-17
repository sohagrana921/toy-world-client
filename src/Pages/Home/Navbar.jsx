import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <Link to="/">All Toys</Link>
      </li>
      <li>
        <NavLink to="/mytoys">My Toys</NavLink>
      </li>
      <li>
        <Link to="/">Add A Toy</Link>
      </li>
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

        <img
          className="h-16"
          src="https://i.ibb.co/HxyR1b5/download.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
