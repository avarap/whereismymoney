import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const resData = await res.json();
        if (res.ok) {
          setData(resData);
        } else {
          throw new Error(resData.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  return data;
};

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
    // .then((response) => {
    //   fetchBeersCB();
    //   navigate("/");
    // })
    // .catch((e) => console.log("error creating apartment on API", e));
  } catch (err) {
    console.log(err.message);
    return "Error connecting to the API";
  }
};
