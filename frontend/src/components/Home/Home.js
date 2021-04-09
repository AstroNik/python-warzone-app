import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [gamerTag, setGamerTag] = useState("");
  const [platform, setPlatform] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/api/playerData", {
        gamerTag: gamerTag,
        platform: platform,
      }, {
        headers: {'content-type': 'application/json'},
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handleButtonClick(e) {
    e.preventDefault();
    setPlatform(e.target.id);
  }

  return (
    <section className="container">
      <div className="content-container">
        <form>
          <div className="form-group">
            <input
              className="tag-input"
              placeholder="GamerTag"
              onChange={(e) => setGamerTag(e.target.value)}
              id="gamerTag"
              name="gamerTag"
            />
          </div>

          <div className="form-group">
            <button
              className={`platform-button ${
                platform === "psn" ? "active-button" : "platform-button"
              }`}
              id="psn"
              onClick={(e) => handleButtonClick(e)}
            >
              PSN
            </button>
            <button
              className={`platform-button ${
                platform === "xbl" ? "active-button" : "platform-button"
              }`}
              id="xbl"
              onClick={(e) => handleButtonClick(e)}
            >
              XBOX
            </button>
            <button
              className={`platform-button ${
                platform === "steam" ? "active-button" : "platform-button"
              }`}
              id="steam"
              onClick={(e) => handleButtonClick(e)}
            >
              STEAM
            </button>
            <button
              className={`platform-button ${
                platform === "battle" ? "active-button" : "platform-button"
              }`}
              id="battle"
              onClick={(e) => handleButtonClick(e)}
            >
              BATTLE
            </button>
          </div>
          <div className="form-group">
            <button className="search-button" onClick={(e) => handleSubmit(e)}>
              {" "}
              Search{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
