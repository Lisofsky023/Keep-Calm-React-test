import React from "react";

export function MainCard(props) {
  const { cardData = {}, cardType = "first" } = props;

  const mainCardTypeClassName = cardType === "first" ? "one" : "two";
  return (
    <div className="main__section">
      <div className={`main__card main__card--${mainCardTypeClassName}`}>
        <img
          className={`main__card-img--${mainCardTypeClassName}`}
          src={cardData.img}
          alt=""
        />
        <div className="main__card-description">
          <h2 className="main__card-subtitle">{cardData.title}</h2>
          <p className="main__card-text">{cardData.description}</p>
          <p className="main__card-text">{cardData.descriptionSecond}</p>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
