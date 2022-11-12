import React from "react";
import { Link, NavLink } from "react-router-dom";

function Categories2() {
  return (
    <div>
      <div className="food">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/italy.png" />
                <h2>İtalyan Yemekleri</h2>
                <p>
                  İtalya'ya özgü tarifleri sizler için özel olarak
                  hazırladık.Tarifler şeflerimiz tarafından özel olarak
                  hazırlanıp eklenmiştir.
                </p>
                <Link to="/italy" className="nav-link">
                  İtalya'ya Özgü Tarifler
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/france.png" />
                <h2>Fransız Yemekleri</h2>
                <p>
                  Fransa'ya özgü tarifleri sizler için özel olarak
                  hazırladık.Tarifler şeflerimiz tarafından özel olarak
                  hazırlanıp eklenmiştir.
                </p>
                <Link to="/france" className="nav-link">
                  Fransa'ya Özgü Tarifler
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/japan.png" />
                <h2>Japon Yemekleri</h2>
                <p>
                  Japonya'ya özgü tarifleri sizler için özel olarak
                  hazırladık.Tarifler şeflerimiz tarafından özel olarak
                  hazırlanıp eklenmiştir.
                </p>
                <Link to="/japan" className="nav-link" href="#">
                  Japonya'ya Özgü Tarifler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories2;
