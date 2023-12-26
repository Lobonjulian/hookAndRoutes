import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export const UseFetch = (url) => {
  console.log("iniciando useFetch");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error("No se pudo realizar la petición");
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};
