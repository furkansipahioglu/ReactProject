import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const apiUrl = "https://www.furkansipahioglu.somee.com/";
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/AdminPanel");
    }
  });

  const fetchLogin = () => {
    const adminNameValue = document.querySelector("#adminName").value;
    const adminUserPasswordValue =
      document.querySelector("#adminPassword").value;
    axios
      .post(apiUrl + "api/Admin/CheckUser", {
        adminname: adminNameValue,
        adminpass: adminUserPasswordValue,
      })
      .then(function (response) {
        if (response.data === "Giriş Başarılı") {
          localStorage.setItem("token", adminNameValue);
          navigate("/AdminLogin/");
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
                fetchLogin();
              }}
            >
              <label for="chk" aria-hidden="true">
                Giriş Yap
              </label>
              <input
                id="adminName"
                type="text"
                placeholder="Kullanıcı Adı"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                autoComplete="nope"
              />
              <input
                id="adminPassword"
                type="password"
                placeholder="Şifre"
                aria-label="Password"
                aria-describedby="basic-addon1"
                autoComplete="none"
                required
              />
              <button>Giriş Yap</button>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AdminLogin;
