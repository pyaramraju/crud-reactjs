import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 shadow">
      <div class="container">
        <a className="navbar-brand" href="#">
          <span>Instapage</span>
        </a>
        <div className="collapse navbar-collapse" id="menulist">
          <div class="d-flex collapse-nav">
            <ul className="navbar-nav">
              <li class="nav-item me-2 dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  PLATFORM
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      A third link
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-2 dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  SOLUTIONS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      A third link
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-2-active">
                <a class="nav-link" href="#">
                  CUSTOMERS
                </a>
              </li>
              <li class="nav-item me-2 active">
                <a class="nav-link" href="#">
                  PLANS
                  <span class="sr-only"></span>
                </a>
              </li>

              <li class="nav-item me-2 dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  RESOURCES
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      A third link
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-second">
            <li className="nav-item ">
                <Link to="/login" name="login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item ">
              <Link to="/signup" name="signup" className="nav-link ms-2 custom-btn-started rounded-pill">Signup</Link>
              </li>
            </ul>
            <div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

