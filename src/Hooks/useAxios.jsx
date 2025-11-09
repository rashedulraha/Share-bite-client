import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [foodCardData, setFoodCardData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching side effect

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => setFoodCardData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { foodCardData, error, loading };
};

export default useAxios;
