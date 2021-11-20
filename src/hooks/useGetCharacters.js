import React from "react";
import useFetch from "./useFetch";

export default function useGetCharacters() {
  const {
    data: characters,
    loading: loadingCharacters,
    error: charactersError,
    status: charactersStatus,
  } = useFetch("https://rickandmortyapi.com/api/character");

  React.useEffect(() => {
    if (loadingCharacters) console.log("loading...");
    else console.log("loaded");
  }, [loadingCharacters]);

  return { characters, loadingCharacters, charactersError, charactersStatus };
}
