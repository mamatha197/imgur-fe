import React from "react";

export default function ImageCard(props) {
  return (
    <div className="image-card">
      <img alt="Pets" width="100" src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
