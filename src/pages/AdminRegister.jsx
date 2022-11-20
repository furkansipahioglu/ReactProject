import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";

function AdminRegister() {
  const navigate = useNavigate();
  // props.history.push('AdminLogin')

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://www.furkansipahioglu.somee.com/api/Admin"
    );

    setPosts(data);
  };

  const control = () => {
    const adminname = document.querySelector("#adminName").value;
    var check = 1;
    posts.map((post) => {
      if (post.adminname === adminname) {
        alert("aynı isimli kullanıcı var");
        check = check - 1;
        return check;
      }
    });
    if (check === 1) {
      fetchenter();
    }
  };

  const fetchenter = () => {
    const adminname1 = document.querySelector("#adminName").value;
    var adminpass1 = document.querySelector("#adminPass").value;
    var adminmail1 = document.querySelector("#adminMail").value;
    axios
      .post("https://www.furkansipahioglu.somee.com/api/Admin", {
        adminname: adminname1,
        adminpass: adminpass1,
        adminmail: adminmail1,
      })
      .then(function (response) {
        if (response) {
          alert("ekleme başarılı");
          navigate("/AdminLogin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <link href="../css/style2.css" rel="stylesheet" />
      <body>
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                control();
              }}
            >
              <label for="chk" aria-hidden="true">
                Kayıt Ol
              </label>
              <input
                type="text"
                name="txt"
                id="adminName"
                placeholder="User name"
                required=""
              />
              <input
                type="email"
                name="email"
                id="adminMail"
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="pswd"
                id="adminPass"
                pattern=".{5,}"
                placeholder="Password"
                required=""
              />
              <button>Kayıt Ol</button>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AdminRegister;
