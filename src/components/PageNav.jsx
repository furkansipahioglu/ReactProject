import React from "react";
import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand">
            
              Yemek <span>Tarifleri</span>
            
          </a>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link">
                Anasayfa
              </Link>

              <Link to="/about" className="nav-item nav-link">
                Hakkımızda
              </Link>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Yemek Kategorileri
                </a>
                <div className="dropdown-menu">
                  <Link to="/tumyemekler" className="dropdown-item">
                    Tüm Yemekler
                  </Link>
                  <Link to="/anayemek" className="dropdown-item">
                    Ana Yemekler
                  </Link>

                  <Link to="/tatlilar" className="dropdown-item">
                    Tatlılar
                  </Link>
                  <Link to="/atistirmaliklar" className="dropdown-item">
                    Atıştırmalıklar
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Ülkelere Göre Yemek
                </a>
                <div className="dropdown-menu">
                  <Link to="/italy" className="dropdown-item">
                    İtalyan
                  </Link>

                  <Link to="/france" className="dropdown-item">
                    Fransız
                  </Link>
                  <Link to="/japan" className="dropdown-item">
                    Japon
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNav;
