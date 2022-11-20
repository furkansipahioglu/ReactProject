import React from "react";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AdminDuzenle() {
  const [details, setDetails] = useState({});
  const apiUrl = "https://www.furkansipahioglu.somee.com/";
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://www.furkansipahioglu.somee.com/api/Foods/${params.id}`
      );

      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.id]);

  const fetchdelete = () => {
    axios
      .delete(
        `https://www.furkansipahioglu.somee.com/api/Foods/${params.id}`,
        {}
      )
      .then(function (response) {
        if (response) {
          alert("silme başarılı");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submit = () => {
    localStorage.removeItem("token");
    navigate("/AdminLogin");
  };

  var token = localStorage.getItem("token");
  let token2 = token.toUpperCase();

  const fetchLogin = () => {
    const foodName = document.querySelector("#foodName").value;
    const foodTitle = document.querySelector("#foodTitle").value;
    const resim1 = document.querySelector("#resimUrl1").value;
    const resim2 = document.querySelector("#resimUrl2").value;
    const youtubevideo1 = document.querySelector("#youtubevideo").value;
    const ülke = document.querySelector("#ülke").value;
    const kısatarif = document.querySelector("#kısatarif").value;
    const uzuntarif = document.querySelector("#uzuntarif").value;
    const ekleyen = document.querySelector("#ekleyen").value;
    const yemektarzı = document.querySelector("#yemektarzı").value;
    const kisi = document.querySelector("#kisi").value;
    const popular = document.getElementById("popular").checked;
    const yeni = document.getElementById("yeni").checked;

    const pisirme = document.querySelector("#pişirmesüresi").value;
    const karbonhidrat = document.querySelector("#karbonhidrat").value;
    const protein = document.querySelector("#protein").value;
    const yag = document.querySelector("#yağ").value;
    const kalori = document.querySelector("#kalori").value;

    const malzeme1 = document.querySelector("#malzeme1").value;
    const malzeme2 = document.querySelector("#malzeme2").value;
    const malzeme3 = document.querySelector("#malzeme3").value;
    const malzeme4 = document.querySelector("#malzeme4").value;

    const malzeme5 = document.querySelector("#malzeme5").value;
    const malzeme6 = document.querySelector("#malzeme6").value;
    const malzeme7 = document.querySelector("#malzeme7").value;
    const malzeme8 = document.querySelector("#malzeme8").value;

    const malzeme9 = document.querySelector("#malzeme9").value;
    const malzeme10 = document.querySelector("#malzeme10").value;
    const malzeme11 = document.querySelector("#malzeme11").value;
    const malzeme12 = document.querySelector("#malzeme12").value;

    const malzeme13 = document.querySelector("#malzeme13").value;
    const malzeme14 = document.querySelector("#malzeme14").value;
    const malzeme15 = document.querySelector("#malzeme15").value;
    const malzeme16 = document.querySelector("#malzeme16").value;

    axios
      .put(`https://www.furkansipahioglu.somee.com/api/Foods?id=${params.id}`, {
        id: params.id,
        name: foodName,
        title: foodTitle,
        image: resim1,
        image2: resim2,
        youtubevideo: youtubevideo1,
        country: ülke,
        description: uzuntarif,
        shortDescription: kısatarif,
        addedBy: ekleyen,
        type: yemektarzı,
        peopleNumber: kisi,
        isPopular: popular,
        isNew: yeni,
        cookingTime: pisirme,
        karbonhidrat: karbonhidrat,
        protein: protein,
        yağ: yag,
        kalori: kalori,
        ingredient1: malzeme1 !== "" ? malzeme1 : null,
        ingredient2: malzeme2 !== "" ? malzeme2 : null,
        ingredient3: malzeme3 !== "" ? malzeme3 : null,
        ingredient4: malzeme4 !== "" ? malzeme4 : null,
        ingredient5: malzeme5 !== "" ? malzeme5 : null,
        ingredient6: malzeme6 !== "" ? malzeme6 : null,
        ingredient7: malzeme7 !== "" ? malzeme7 : null,
        ingredient8: malzeme8 !== "" ? malzeme8 : null,
        ingredient9: malzeme9 !== "" ? malzeme9 : null,
        ingredient10: malzeme10 !== "" ? malzeme10 : null,
        ingredient11: malzeme11 !== "" ? malzeme11 : null,
        ingredient12: malzeme12 !== "" ? malzeme12 : null,
        ingredient13: malzeme13 !== "" ? malzeme13 : null,
        ingredient14: malzeme14 !== "" ? malzeme14 : null,
        ingredient15: malzeme15 !== "" ? malzeme15 : null,
        ingredient16: malzeme16 !== "" ? malzeme16 : null,
      })
      .then(function (response) {
        if (response) {
          alert("başarılı");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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

      <div className="about">
        <div className="container align-items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchLogin();
            }}
          >
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">RESİM 1 URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="resimUrl1"
                  placeholder="Example input"
                  defaultValue={details.image}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">RESİM 2 URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="resimUrl2"
                  placeholder="Example input"
                  defaultValue={details.image2}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Food Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="foodName"
                  placeholder="Example input"
                  defaultValue={details.name}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Food title</label>
                <input
                  type="text"
                  class="form-control"
                  id="foodTitle"
                  defaultValue={details.title}
                  placeholder="Example input"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Youtube Video Embed</label>
                <input
                  type="text"
                  class="form-control"
                  id="youtubevideo"
                  placeholder="Example input"
                  defaultValue={details.youtubevideo}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Ülke</label>
                <input
                  type="text"
                  class="form-control"
                  id="ülke"
                  placeholder="Example input"
                  defaultValue={details.country}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlTextarea1">Kısa Tarif</label>
                <textarea
                  class="form-control"
                  id="kısatarif"
                  rows="3"
                  defaultValue={details.shortDescription}
                  required
                ></textarea>
              </div>

              <div class="col">
                <label for="exampleFormControlTextarea1">Uzun Tarif</label>
                <textarea
                  class="form-control"
                  id="uzuntarif"
                  rows="3"
                  defaultValue={details.description}
                  required
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Ekleyen Kişi</label>
                <input
                  type="text"
                  class="form-control"
                  id="ekleyen"
                  placeholder="Example input"
                  defaultValue={details.addedBy}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">
                  Yemek Tarzı (anayemek)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="yemektarzı"
                  placeholder="Example input"
                  defaultValue={details.type}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Kaç Kişilik</label>
                <input
                  type="number"
                  class="form-control"
                  id="kisi"
                  placeholder="Example input"
                  defaultValue={details.peopleNumber}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="popular"
                    defaultValue={details.isPopular}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Popüler mi
                  </label>
                </div>
              </div>

              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="yeni"
                    defaultValue={details.isNew}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Yeni mi
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Pişme Süresi</label>
                <input
                  type="number"
                  class="form-control"
                  id="pişirmesüresi"
                  placeholder="Example input"
                  defaultValue={details.cookingTime}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Kalori</label>
                <input
                  type="number"
                  class="form-control"
                  id="kalori"
                  placeholder="Example input"
                  defaultValue={details.kalori}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Protein</label>
                <input
                  type="number"
                  class="form-control"
                  id="protein"
                  placeholder="Example input"
                  defaultValue={details.protein}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Karbonhidrat</label>
                <input
                  type="number"
                  class="form-control"
                  id="karbonhidrat"
                  placeholder="Example input"
                  defaultValue={details.karbonhidrat}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Yağ</label>
                <input
                  type="number"
                  class="form-control"
                  id="yağ"
                  placeholder="Example input"
                  defaultValue={details.yağ}
                  required
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 1</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme1"
                  placeholder="Example input"
                  defaultValue={details.ingredient1}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme2"
                  placeholder="Example input"
                  defaultValue={details.ingredient2}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 3</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme3"
                  placeholder="Example input"
                  defaultValue={details.ingredient3}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 4</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme4"
                  placeholder="Example input"
                  defaultValue={details.ingredient4}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 5</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme5"
                  placeholder="Example input"
                  defaultValue={details.ingredient5}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 6</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme6"
                  placeholder="Example input"
                  defaultValue={details.ingredient6}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 7</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme7"
                  placeholder="Example input"
                  defaultValue={details.ingredient7}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 8</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme8"
                  placeholder="Example input"
                  defaultValue={details.ingredient8}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 9</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme9"
                  placeholder="Example input"
                  defaultValue={details.ingredient9}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 10</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme10"
                  placeholder="Example input"
                  defaultValue={details.ingredient10}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 11</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme11"
                  placeholder="Example input"
                  defaultValue={details.ingredient11}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 12</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme12"
                  placeholder="Example input"
                  defaultValue={details.ingredient12}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 13</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme13"
                  placeholder="Example input"
                  defaultValue={details.ingredient13}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 14</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme14"
                  placeholder="Example input"
                  defaultValue={details.ingredient14}
                />
              </div>

              <div class="col">
                <label for="formGroupExampleInput">Malzeme 15</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme15"
                  placeholder="Example input"
                  defaultValue={details.ingredient15}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="formGroupExampleInput">Malzeme 16</label>
                <input
                  type="text"
                  class="form-control"
                  id="malzeme16"
                  placeholder="Example input"
                  defaultValue={details.ingredient16}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary my-2 py-2">
              Güncelle
            </button>
          </form>
          <button
            type="submit"
            className="btn btn-primary my-2 py-2"
            onClick={(e) => {
              e.preventDefault();
              fetchdelete();
            }}
          >
            Sil
          </button>
        </div>
      </div>
      <Categories />
      <Categories2 />
      <Footer />
    </div>
  );
}

export default AdminDuzenle;
