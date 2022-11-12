import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PopulerTarif() {
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

  const rownumber = 0;

  return (
    <div>
      <div className="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-header">
                <h2>Popüler Tarifler</h2>
              </div>
              <div className="feature-text">
                <div className="feature-img">
                  <div className="row">
                    <div className="col-6">
                      <img src="img/feature-1.jpg" alt="Image" />
                    </div>
                    <div className="col-6">
                      <img src="img/feature-2.jpg" alt="Image" />
                    </div>
                    <div className="col-6">
                      <img src="img/feature-3.jpg" alt="Image" />
                    </div>
                    <div className="col-6">
                      <img src="img/feature-4.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
                <p>
                  Bazı popüler tarifleri görebilirsiniz.Popüler tarifler sizler
                  için özel olarak hazırlandı ve şeflerimiz tarafından özel
                  olarak eklendi.Tarifler sürekli güncellenicek Detaylar için
                  takipte kalın.
                </p>
                <Link to={"/tumyemekler"} className="btn custom-btn">
                  Tüm Yemekler
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {posts.map((post) => {
                  if (post.id <= 10 && post.isPopular === true) {
                    return (
                      <div key={post.id} className="col-sm-6">
                        <div className="feature-item">
                          <Link to={"/recipe/" + post.id}>
                            <img
                              src={post.image}
                              alt=""
                              className="imgClass"
                              style={{
                                borderRadius: "10px",

                                maxWidth: "150px",
                                boxShadow: "inherit",
                              }}
                            />
                          </Link>

                          <h3>{post.name} </h3>
                          <p>{post.shortDescription}</p>
                        </div>
                      </div>
                    );
                  }
                })}
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulerTarif;
