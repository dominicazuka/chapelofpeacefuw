import {Link} from 'react-router-dom';
import Logo from '../assets/logo/logo192.png';

function NavBarOffCanvas () {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top"  id="nav-1" style={{boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"}}>
      <div class="container-fluid">
        <a class="navbar-brand">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Chapel of Peace FUW" width="60" height="60" />
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabIndex="-1"
          id="nav-1"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Chapel of Peace FUW
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  <Link
                    to="/"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/about"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    About Us
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/units"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Units
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/partners"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Partnerships
                  </Link>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/projects"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Projects
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/contact"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Contact
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/givings"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Givings
                  </Link>
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div
          class="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Chapel of Peace FUW
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div class="offcanvas-body d-lg-none">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  <Link
                    to="/"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/about"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    About Us
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/units"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Units
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/partners"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Partners
                  </Link>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/projects"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Projects
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/contact"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Contact
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/givings"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Givings
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/membership"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Membership
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/response-form"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Response Form
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/bible-study"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Bible Study
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/prayer"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Prayer
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/children-unit"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Children Unit
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/alumni"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Alumni
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/alumni-membership"
                    style={{
                      backgroundColour: 'transparent',
                      textDecoration: 'none',
                      color: 'blue',
                    }}
                  >
                    Alumni Membership
                  </Link>
                </a>
              </li>
            </ul>
            <div
              className="text-center p-3 mt-1 d-lg-none"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
            >
              © 2022 Copyright | Chapel of Peace FUW
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarOffCanvas;
