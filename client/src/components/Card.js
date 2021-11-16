import React from "react";
import "./Card.css";

const Card = ({
  name,
  rating,
  logo_file,
  description,
  setIsJobOpportunityClick,
  setSourceName,
}) => {
  return (
    <div
      className="card"
      onClick={() => {
        setSourceName(name);
        setIsJobOpportunityClick(true);
      }}
    >
      <img src={logo_file} alt={name} />
      <div>
        <p className="rating">{rating}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
