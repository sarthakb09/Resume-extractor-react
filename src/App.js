//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [apiResponse, setApiResponse] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:800/getData", { filename: "RameshCMetta_CV.docx" }).then((response) => {
        setApiResponse(response.data);
      })
      .catch((e) => console.log(e));

    
  };
  console.log(apiResponse);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Profile Card</h2>
      {apiResponse.length > 0 && (
        <ul>
          {apiResponse.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      )}
    </>
  );
};


export default App;
