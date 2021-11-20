import React from "react";
import { Link } from "react-router-dom";

export default function Character({ character }) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      <h2>{character?.name}</h2>{" "}
      <Link to={`character/${character?.id}`}>
        <img
          src={character?.image}
          alt={character?.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "5px",
          }}
        />{" "}
      </Link>
    </div>
  );
}
