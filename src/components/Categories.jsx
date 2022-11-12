import React from "react";
import { Link, NavLink } from "react-router-dom";

function Categories() {
  return (
    <div>
      <div className="food">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/meal.png" />
                <h2>Ana Yemekler</h2>
                <p>
                  Tüm ana yemek seçenekleri için tıklayın.Canınızın çektiği tüm
                  tariflere buradan kolaylıkla ulaşabilirsiniz.Ana yemeğiniz ile
                  misafirlerinizi etkileyin.
                </p>
                <Link to="/anayemek" className="nav-link" href="#">
                  Tüm Ana Yemekler
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/cherry-cheesecake.png" />
                <h2>Tatlılar</h2>
                <p>
                  Tüm tatlı seçenekleri için tıklayın.Canınızın çektiği tüm
                  tariflere buradan kolaylıkla ulaşabilirsiniz.Güzel bir tatlı
                  ile vurucu bir etki bırakın.
                </p>
                <Link to="/tatlilar" className="nav-link" href="#">
                  Tüm Tatlılar
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/taco.png" />
                <h2>Atıştırmalıklar</h2>
                <p>
                  Tüm tatlı seçenekleri için tıklayın.Canınızın çektiği tüm
                  tariflere buradan kolaylıkla ulaşabilirsiniz.Kolay ve hızlı
                  bir şekilde açlığınızı bastırın
                </p>
                <Link to="/atistirmaliklar" className="nav-link" href="#">
                  Tüm Atıştırmalıklar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
