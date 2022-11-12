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
    const { data } = await axios.get("http://www.furkansipahioglu.somee.com/api/Foods");

    setPosts(data);
  };

  return (
    <div>
      <div className="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-header">
                <h2>En Yeni Tarifler</h2>
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
                  En yeni tarifleri buradan görebilirsiniz.En yeni tarifler
                  sizler için özel olarak hazırlandı ve şeflerimiz tarafından
                  özel olarak eklendi.Tarifler sürekli güncellenicek Detaylar
                  için takipte kalın.
                </p>
                <Link to={"/tumyemekler"} className="btn custom-btn">
                  Tüm Yemekler
                </Link>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                {/* {posts.slice(posts.at(posts.length-11), posts.at(posts.length-1)).map((post) => { */}
                {posts.slice(0, 20).map((post) => {
                  if (post.isNew === true) {
                    return (
                      <div class="col-sm-6">
                        <div class="feature-item">
                          <Link to={"/tumyemekler"}>
                            <img
                              src={post.image}
                              alt=""
                              class="imgClass"
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
