import React from "react";
import './style.css'

const Card = ({ chapter, duration, title, points }) => {
  return <div className="card" >
    <div className="card-header" >
      <div> <button className="chapter" > Ch {chapter}  </button> </div>
      <div className="duration" > Duration: {duration} </div>
    </div>
    <h4 className="title" > {title} </h4>
    <div className="points" >
      <ul>
        {points.map((point) => (
          <li> {point} </li>
        ))}
      </ul>
    </div>
  </div>;
};

export default Card;
