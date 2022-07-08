import React, { useState } from "react";
import "./SCSS/styles.scss";

import Divider from "./images/pattern-divider.svg";
import Kerbal from "./images/kerbal.svg";

const App = () => {
  const [advice, setAdvice] = useState({
    slip: {
      id: 404,
      advice: "Click for advice...",
    },
  });

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      });
  };

  return (
    <section className="card">
      <h2 className="card__number">ADVICE #{advice.slip.id}</h2>
      <h1 className="card__advice">"{advice.slip.advice}"</h1>
      <img className="card__line" src={Divider} alt="Divider" />
      <button className="card__button" onClick={() => getAdvice()}>
        New Advice
      </button>
      <a href="https://www.frontendmentor.io/profile/jhellard">
        <img className="card__kerbal" src={Kerbal} alt="Kerbal" />
      </a>
    </section>
  );
};

export default App;
