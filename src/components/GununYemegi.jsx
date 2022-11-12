import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
/*function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}
const randomnumber = getRandomArbitrary(1, 5);

sessionStorage.setItem("random", randomnumber);

// getter
const randomnumberr = sessionStorage.getItem("random");
*/

function GununYemegi() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`http://www.furkansipahioglu.somee.com/api/Foods/${2}`);
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  });

  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={details.image} className="imgClass" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <p>Günün Yemeği</p>
                  <h2>{details.name}</h2>
                </div>
                <div className="about-text">
                  <p>{details.description}</p>
                  <p>Tarifi ekleyen kişi: {details.addedBy}</p>

                  <Link to={"/recipe/" + details.id} className="btn custom-btn">
                    Detaylar
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

export default GununYemegi;
