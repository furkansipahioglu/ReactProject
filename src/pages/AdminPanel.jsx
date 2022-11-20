import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";

function AdminPanel(props) {
  const navigate = useNavigate();
  // props.history.push('AdminLogin')
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString === null) {
      navigate("/AdminLogin");
    }
  });
  var token = localStorage.getItem("token");
  let token2 = token.toUpperCase();

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

  const submit = () => {
    localStorage.removeItem("token");
    navigate("/AdminLogin");
  };

  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
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
              <a className="nav-item nav-link">Hoşgeldin {token2}</a>

              <a
                onClick={submit}
                className="nav-item nav-link"
                style={{ cursor: "pointer" }}
              >
                Çıkış Yap
              </a>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <Link to={"/AdminPanelEkle"}>
              <h2>Tarif Eklemek için Tıklayın</h2>
            </Link>

            <h2>Tarifleri Düzenleyebilirsiniz</h2>
            <p>Tüm Tarifleri Burada Bulabilirsiniz</p>
          </div>
          <div className="row">
            {posts.map((post) => {
              if (post.id > 0) {
                return (
                  <div key={post.id} className="col-md-4">
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
                            to={"/AdminDuzenle/" + post.id}
                            className="btn custom-btn"
                          >
                            Düzenle veya Sil
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
    </div>
  );
}

export default AdminPanel;
