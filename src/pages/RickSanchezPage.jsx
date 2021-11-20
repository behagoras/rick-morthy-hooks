import React from "react";
import LoadingComponent from "../components/LoadingComponent";
import useGetCharacters from "../hooks/useGetCharacters";
import useToggle from "../hooks/useToggle";

export default function RickSanchezPage() {
  const { characters, loadingCharacters } = useGetCharacters();
  const [alive, toggleAlive] = useToggle(true);
  const rickSanchez = characters?.find(
    (character) => character.name === "Rick Sanchez"
  );
  return (
    <LoadingComponent loading={loadingCharacters}>
      <div>
        <h2>{rickSanchez?.name}</h2>
        {alive ? (
          <img
            src="https://media.giphy.com/media/IgpAALi5hEv1IFmCrZ/giphy.gif"
            alt={rickSanchez?.name}
          />
        ) : (
          <img
            src="https://media.giphy.com/media/1d5WC3UJomQufO5epr/giphy.gif"
            alt="dead"
          />
        )}
        <div>
          <button onClick={() => toggleAlive()}>
            {alive ? "Kill" : "Revive"}
          </button>
        </div>
      </div>
    </LoadingComponent>
  );
}
