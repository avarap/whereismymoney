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

//axios.defaults.withCredentials=true;
export const getData = async (url) => {
  try {
    //console.log(url, data);
    const response = await axios.get(url, { withCredentials: true });
    return response;
  } catch (err) {
    console.log(err.message);
    return "Error connecting to the API";
  }
};

export const postData = async (url, data) => {
  try {
    //console.log(url, data);
    const response = await axios.post(url, data,{withCredentials:true});
    return response;
  } catch (err) {
    console.log(err.message);
    return "Error connecting to the API";
  }
};
