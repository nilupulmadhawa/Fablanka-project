import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { MDBIcon } from "mdb-react-ui-kit";
import Styles from "../styles/Navbar.module.css";

const navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-item px-3">
        <Link href="/admin/dashboard">
          <a
            className={
              router.pathname === "/admin/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Dashboard
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/admin/register">
          <a
            className={
              router.pathname === "/admin/register"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Register
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/admin/addnews">
          <a
            className={
              router.pathname === "/admin/addnews"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Add News
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link" href="#!" onClick={logoutHandler}>
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item px-3">
        <Link href="/">
          <a
            className={router.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/#">
          <a
            className={
              router.pathname === "/#" ? "nav-link active" : "nav-link"
            }
          >
            Industry 4.0 Technologies
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/#">
          <a
            className={
              router.pathname === "/#" ? "nav-link active" : "nav-link"
            }
          >
            Free education
          </a>
        </Link>
      </li>
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          FabLabs
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item dropdown px-2">
            <Link href="/fablabs/makadura">
              <a
                className={
                  router.pathname === "/fablabs/makadura"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                FabLab Makadura
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown px-2">
            <Link href="/#">
              <a
                className={
                  router.pathname === "/#" ? "nav-link active" : "nav-link"
                }
              >
                Free education
              </a>
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item px-3">
        <Link href="/about">
          <a
            className={
              router.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/login">
          <a
            className={
              router.pathname === "/login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </a>
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark sticky-sm-top ${Styles.navbar}`}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">FABLAB</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <MDBIcon fas icon="bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
