import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <section className="brand">
          <span>Technical Blogs.io</span>
        </section>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link href="/my-blogs">My Blog</Link>
          </li>
        </ul>
        <section>
          <button className="write-btn">
            <Link to="/write-blog">
              Write &nbsp;
              <i className="fa fa-edit"></i>
            </Link>
          </button>
          <button className="write-btn">
            <Link to="/login">
              Login &nbsp;
              <i className="fa fa-user"></i>
            </Link>
          </button>
          <span id="welcome-text">Welcome, Deepak</span>
          <button id="logout" class="write-btn">
            Logout
          </button>
        </section>
      </header>
    </>
  );
};

export default Header;
