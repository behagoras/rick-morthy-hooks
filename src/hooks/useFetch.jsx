import { useEffect, useState } from "react";
import useLog from "./useLog";

export default function useFetch(url, initialValue = [], options = {}) {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useLog({
    data,
    loading,
    message:'data was updated'
  },[loading])
  useEffect(() => {
    // get pokemons with the entire data
    setLoading(true);
    fetch(url, options)
      .then((response) => {
        setStatus(response.status);
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { data, loading, status, error };
}
