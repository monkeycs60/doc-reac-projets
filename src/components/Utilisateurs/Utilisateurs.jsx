import React, { useState } from "react";
import "./Utilisateurs.css";

const Utilisateurs = ({ name, height, weight, description }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    setIsRemoved(true);
  };

  const handleRestore = () => {
    setIsRemoved(false);
  };

  return (
    <div>
      {!isRemoved ? (
        <div>
          <h1
            style={{
              color:
                [...name.toLowerCase()].reduce(
                  (acc, c) =>
                    acc +
                    (name.toLowerCase().match(new RegExp(c, "g")).length >= 2
                      ? 1
                      : 0),
                  0
                ) > 0
                  ? "blue"
                  : "red",
            }}
          >
            Nom d'utilisateur : {name}
          </h1>
          <p>Taille: {height}cm</p>
          <p>
            Poids:
            <span style={{ color: weight > 75 ? "red" : "green" }}>
              {weight}
            </span>
            kg
          </p>
          <p>Description: {description}</p>
          <button onClick={handleRemove}>Remove</button>
        </div>
      ) : (
        <button onClick={handleRestore}>Restore</button>
      )}
    </div>
  );
};

export default Utilisateurs;
