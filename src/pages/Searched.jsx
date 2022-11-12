import React from "react";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
function Recipe() {
  const [details, setDetails] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `http://www.furkansipahioglu.somee.com/api/Foods/${params.id}`
      );

      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.id]);
  /*
  var arr = [];
  for (let i = 0; i < params.id.length; i++) {
    arr.push(params.id.slice(i, i + 1));
    i++;
  }
  console.log(params.id.slice(2, 3));

  console.log(arr);
  */

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
                <img src={details.image} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <p>{details.country}</p>
                  <h2>{details.name}</h2>
                </div>
                <div className="about-text">
                  <p>{details.description}</p>
                  <p>Tarifi ekleyen kişi: {details.addedBy}</p>

                  <Link to={"/"} className="btn custom-btn">
                    Anasayfa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="container">
          <div className="section-header text-center">
            <p>{details.name}</p>
            <h2>{details.name} Malzemeleri</h2>
          </div>
          <div className="menu-tab">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#burgers">
                  Malzemeler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#snacks">
                  Kalori Değeri
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="burgers" className="container tab-pane active">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="menu-item">
                      <div className="menu-img">
                        <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>{details.ingredient1}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-img">
                        <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>{details.ingredient2}</span>
                        </h3>
                      </div>
                    </div>
                    {details.ingredient3 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient3}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient4 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient4}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient5 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient5}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient6 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient6}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient7 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient7}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient8 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient8}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient9 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient9}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient10 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient10}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient11 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient11}</span>
                          </h3>
                        </div>
                      </div>
                    )}

                    {details.ingredient12 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient12}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient13 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient13}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient14 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient14}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient15 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient15}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                    {details.ingredient16 !== null && (
                      <div className="menu-item">
                        <div className="menu-img">
                          <img src="https://img.icons8.com/clouds/100/null/ingredients.png" />
                        </div>
                        <div className="menu-text">
                          <h3>
                            <span>{details.ingredient16}</span>
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <img src={details.image} style={{ marginBottom: "5%" }} />
                    <img src={details.image2} style={{ marginBottom: "5%" }} />
                  </div>
                </div>
              </div>
              <div id="snacks" className="container tab-pane fade">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="menu-item">
                      <div className="menu-img">
                        <img
                          src="https://img.icons8.com/glyph-neue/64/null/caloric-energy.png"
                          style={{ width: "auto" }}
                        />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>
                            1 Porsiyon Toplam Kalori: {details.kalori}
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-img">
                        <img
                          src="https://img.icons8.com/external-filled-outline-geotatah/64/null/external-calorie-detoxification-color-filled-outline-geotatah-2.png"
                          style={{ width: "auto" }}
                        />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>Karbonhidrat: {details.karbonhidrat}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-img">
                        <img
                          src="https://img.icons8.com/external-filled-outline-geotatah/64/null/external-calorie-detoxification-color-filled-outline-geotatah-2.png"
                          style={{ width: "auto" }}
                        />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>Protein: {details.protein}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-img">
                        <img
                          src="https://img.icons8.com/external-filled-outline-geotatah/64/null/external-calorie-detoxification-color-filled-outline-geotatah-2.png"
                          style={{ width: "auto" }}
                        />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>Yağ: {details.yağ}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <img src={details.image} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container">
            <iframe
              src={details.youtubevideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>

      <Categories />
      <Categories2 />
      <Footer />
    </div>
  );
}

export default Recipe;
