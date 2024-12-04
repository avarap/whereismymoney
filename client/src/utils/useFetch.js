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

export const getData = async (url, headers = {}) => {
  try {
    const newHeaders = { ...headers };
    const response = await axios.get(url, { headers: newHeaders, withCredentials: true });
    return response;
  } catch (err) {
    console.log(err.message);
    return "Error connecting to the API";
  }
};

export const postData = async (url, data, headers = {}) => {
  try {
    const newHeaders = { ...headers };
    const response = await axios.post(url, data, { headers: newHeaders, withCredentials: true });
    return response;
  } catch (err) {
    console.log(err.message);
    return "Error connecting to the API";
  }
};

export const deleteUserData = async (id) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/cashflow/delete/${id}`;
    const allData = await postData(url, {});
    console.log(allData);
    return allData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};