import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div class="container">
      {/* <div class="card__container"> */}
      <div class="card">
        <div class="card__content">
          <p class="card__info">
            <i>''{props.quote}''</i>
          </p>
          <h3 class="card__author">... {props.author}</h3>
          <button class="card__button" onClick={props.onClick}>
            More
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
