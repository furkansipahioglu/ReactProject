import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";

function TumYemekler() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://www.furkansipahioglu.somee.com/api/Foods"
    );

    setPosts(data);
  };

  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
      <PageNav />
      <Carousel />

      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <h2>Tüm Yemek Tarifleri</h2>
            <p>Tüm Tarifleri Burada Bulabilirsiniz</p>
          </div>
          <div className="row">
            {posts.map((post) => {
              if (post.id > 0) {
                return (
                  <div className="col-md-4">
                    <div className="blog-item">
                      <div className="blog-img">
                        <img className="imgClass" src={post.image} alt="Blog" />
                      </div>
                      <div className="blog-content">
                        <h2 className="blog-title">{post.title}</h2>
                        <div className="blog-meta">
                          <p>
                            <i className="far fa-user"></i>
                            {post.addedBy}
                          </p>
                          <p>
                            <i className="far fa-list-alt"></i>
                          </p>
                          <p>
                            <i className="far fa-calendar-alt"></i>
                          </p>
                          <p>
                            <i className="far fa-comments"></i>
                            {post.country}
                          </p>
                        </div>
                        <div className="blog-text">
                          <p>{post.shortDescription}</p>
                          <Link
                            to={"/recipe/" + post.id}
                            className="btn custom-btn"
                          >
                            Detaylar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Categories />
      <Categories2 />
      <Footer />
    </div>
  );
}

export default TumYemekler;
