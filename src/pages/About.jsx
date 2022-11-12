import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
      <PageNav />
      <Carousel />
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="https://www.opencodez.com/wp-content/uploads/2019/10/Full-Stack-Developer.jpeg"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <p>Full Stack Developer Bootcamp Proje</p>
                  <h2>Furkan Gökhan Sipahioğlu</h2>
                </div>
                <div className="about-text">
                  <p></p>
                  <p>
                    Bu projenin amacı yemek tarifleri sitesi tasarlayıp bazı
                    işlevlerini kullanılabilir hale getirmekti.
                  </p>

                  <Link to={"/"} className="btn custom-btn">
                    Anasayfa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <Categories2 />
      <Footer />
    </div>
  );
}

export default About;
