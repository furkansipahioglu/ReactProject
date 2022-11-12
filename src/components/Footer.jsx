import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-contact">
                    <h2>Addres</h2>
                    <p>
                      <i className="fa fa-map-marker-alt"></i>123 Street, New York,
                      USA
                    </p>
                    <p>
                      <i className="fa fa-phone-alt"></i>+90 533 967 51 53
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>furkansipahioglu@gmail.com
                    </p>
                    <div className="footer-social">
                      
                      <a href="https://www.linkedin.com/in/furkan-sipahioglu/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-link">
                    <h2>Linkler</h2>
                    <Link to={"/tumyemekler"}>Tüm Yemekler</Link>
                    <Link to={"/anayemek"}>Ana Yemekler</Link>
                    <Link to={"/tatlilar"}>Tatlılar</Link>
                    <Link to={"/about"}>Hakkımızda</Link>
                    <Link to={"/japan"}>Japon Yemekleri</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-newsletter">
                <h2>Günün Sözü</h2>
                <p>
                  Yaşam bizim için meçhuldür. Bilebildiğimiz tek şey, bu dünyaya
                  yemek ve olabildiğince uzun yaşamak için geldiğimiz.{" "}
                  <strong>Richard Bach</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              Copyright &copy; <a href="#">furkansipahioglu</a>, All Right
              Reserved.
            </p>
            <p>
              <a href="https://htmlcodex.com"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
