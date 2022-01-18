export function fetchData(path,options){
  const server_url = process.env.REACT_APP_API ? process.env.REACT_APP_API : "http://localhost:5001";
  const url = server_url + path;
  return fetch(url,{
    ...options,
    credentials: "include"
  })
}

// import fetchData from "../../........./fetchData";
