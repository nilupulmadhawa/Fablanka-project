import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

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
      <li className="nav-item">
        <Link href="/dashboard">
          <a
            className={
              router.pathname === "/dashboard" ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={logoutHandler}>
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      {/* <li className="nav-item">
        <Link href="/register">
          <a
            className={
              router.pathname === "/register" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </a>
        </Link>
      </li> */}
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-3">
              <Link href="/">
                <a
                  className={
                    router.pathname === "/" ? "nav-link active" : "nav-link"
                  }
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
                Dropdown link
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
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
                    router.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Us
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
                  Home
                </a>
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
