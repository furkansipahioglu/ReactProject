import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Searched from "../pages/Searched";
import { Component } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [data, setData] = useState("");
  var inputname;

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

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submithandler = (x) => {
    if (input && inputname !== undefined) {
      document.getElementById("Button").disabled = false;
      x.preventDefault();
      navigate("/searched/" + inputname);
    } else alert("Yanlış tarif adı girdiniz");
  };

  {
    posts.map((post) => {
      if (post.name === input) {
        inputname = post.id;
        return inputname;
      }
    });
  }

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card p-4" style={{ border: "none", marginTop: "5px" }}>
          <h2 className="search__title" style={{ paddingBottom: "7%" }}>
            Aradığınız Tüm Tarifler Burada
          </h2>
          <div
            className="input-group mb-3"
            style={{
              border: "solid",
              borderRadius: "10px",
              borderColor: "black",
            }}
          >
            <input
              type="text"
              className="form-control"
              onChange={(x) => setInput(x.target.value)}
              value={input}
              required
            />
            <div className="input-group-append">
              <button
                disabled={!input}
                id="Button"
                className="btn btn-primary"
                onClick={submithandler}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
