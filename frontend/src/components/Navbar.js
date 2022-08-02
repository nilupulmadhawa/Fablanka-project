import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";

const navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Navbar</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
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
          <li className="nav-item">
            <Link href="/register">
              <a
                className={
                  router.pathname === "/register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Register
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
