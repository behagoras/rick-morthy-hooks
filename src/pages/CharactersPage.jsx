import React from "react";
import { Link } from "react-router-dom";
import Character from "../components/Character";
import useGetCharacters from "../hooks/useGetCharacters";

export default function CharactersPage() {
  const { characters, charactersError } = useGetCharacters();
  return charactersError ? (
    <>
      <h1>API failed</h1>
      <img
        src="https://media.giphy.com/media/H7wajFPnZGdRWaQeu0/giphy.gif"
        alt="404"
      />
    </>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "1rem",
      }}
    >
      {characters.map((character) => (
        <Character character={character} />
      ))}
    </div>
  );
}
