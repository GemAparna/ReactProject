import Navbar from "./Components/Navbar";
import "./App.css";
import Frontend from "./Components/Frontend";
import {datafrontend} from '../src/Details/DataFrontend';
import Backend from "./Components/Backend";
import {databackend} from "../src/Details/DataBackend"
import React, { useEffect, useState } from 'react';


 
function App() {


  const [datafrontendMembers, setdatafrontendMembers] = useState([]);
  const [databackendMembers, setdatabackendMembers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("datafrontend"))
      localStorage.setItem("datafrontend", JSON.stringify(datafrontend));

      if (!localStorage.getItem("databackend"))
      localStorage.setItem("databackend", JSON.stringify(databackend));
  }, []);

  useEffect(() => {
    var datafrontendMems = localStorage.getItem("datafrontend");
    setdatafrontendMembers(JSON.parse(datafrontendMems));

    var databackendMems = localStorage.getItem("databackend");
    setdatabackendMembers(JSON.parse(databackendMems));

  }, []);

  
  return (
    <>
    <div className="division">
   <Navbar/>
   <br></br>
   <div className="frontend">
    <h2>Frontend Developers</h2>
       < Frontend
        members={datafrontendMembers}
      />
      </div>
      <br></br>
      <div className="backend my-5">
        <h2>Backend Developers</h2>
        <Backend members={databackendMembers}/>
      </div>
    </div>
    </>
  );
}

export default App;
