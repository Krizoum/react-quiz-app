import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dat) => {
        setData(dat.results);
        setIsLoading(false);
        console.log(dat.results);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
