import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import useGetCharacters from "../hooks/useGetCharacters";

export default function RickSanchezPage() {
  const { id } = useParams();
  const { characters, loadingCharacters } = useGetCharacters();
  const character = characters?.find((character) => `${character.id}` === id);
  return (
    <LoadingComponent loading={loadingCharacters}>
      <div>
        <h2>{character?.name}</h2>
        <img src={character?.image} alt={character?.name} />
      </div>
    </LoadingComponent>
  );
}
