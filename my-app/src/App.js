import Navbar from "./Components/Navbar";
import "./App.css";
import Frontend from "./Components/Frontend";
import {frontend} from '../src/Details/DataFrontend';
import Backend from "./Components/Backend";
import {backend} from "../src/Details/DataBackend";
import Allocation from "./Components/Allocation";

import React, { useEffect, useState } from 'react';


 
function App() {
  
  const [frontendMembers, setFrontendMembers] = useState([]);
  const [backendMembers, setBackendMembers] = useState([]);
  const [allocatedMembers, setAllocatedMembers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("frontend"))
      localStorage.setItem("frontend", JSON.stringify(frontend));

    if (!localStorage.getItem("backend"))
      localStorage.setItem("backend", JSON.stringify(backend));
  }, []);

  useEffect(() => {
    var frontendMems = localStorage.getItem("frontend");
    setFrontendMembers(JSON.parse(frontendMems));

    var backendMems = localStorage.getItem("backend");
    setBackendMembers(JSON.parse(backendMems));
  }, []);

  useEffect(() => {
    var allocatedMems = localStorage.getItem("allocated");
    if (allocatedMems)
      setAllocatedMembers(JSON.parse(allocatedMems));
  }, []);

  const allocateFrontendMember = (sn) => {
    for (var i = 0; i < frontendMembers.length; i++) {
      if (frontendMembers[i].sn === sn) {
        frontendMembers[i].allocation = true;
        setAllocatedMembers([...allocatedMembers, frontendMembers[i]]);
        localStorage.setItem("allocated", JSON.stringify([...allocatedMembers, frontendMembers[i]]));

        frontendMembers.splice(i, 1);
        break;
      };
    }
    localStorage.setItem("frontend", JSON.stringify(frontendMembers));
  };

  const allocateBackendMember = (sn) => {
    for (var i = 0; i < backendMembers.length; i++) {
      if (backendMembers[i].sn ===sn) {
        backendMembers[i].allocation = true;
        setAllocatedMembers([...allocatedMembers, backendMembers[i]]);
        localStorage.setItem("allocated", JSON.stringify([...allocatedMembers, backendMembers[i]]));

        backendMembers.splice(i, 1);
        break;
      };
    }
    localStorage.setItem("backend", JSON.stringify(backendMembers));
  };

  function containsMember(sn, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].sn === sn) {
        return true;
      }
    }
    return false;
  }

  const updatedCommentList = (list, sn, comment) => {
    const newList = list.map((item) => {
      if (item.sn === sn) {
        const updatedItem = {
          ...item,
          comments: comment,
        };
        return updatedItem;
      }
      return item;
    });
    return newList;
  };

  const updateComment = (sn, event) => {
    const value = event.target.value;
    if (containsMember(sn, frontendMembers)) {
      const newList = updatedCommentList(frontendMembers, sn, value);
      setFrontendMembers(newList);
      localStorage.setItem("frontend", JSON.stringify(newList));
    } else if (containsMember(sn, backendMembers)) {
      const newList = updatedCommentList(backendMembers, sn, value);
      setBackendMembers(newList);
      localStorage.setItem("backend", JSON.stringify(newList));
    } else {
      const newList = updatedCommentList(allocatedMembers, sn, value);
      setAllocatedMembers(newList);
      localStorage.setItem("allocated", JSON.stringify(newList));
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <div className="frontend">
        <h2>Frontend Developers</h2>
      <Frontend
        members={frontendMembers}
        updateAllocation={allocateFrontendMember}
        updateComment={updateComment}
      />
      </div>
      <br></br>
       <div className="backend">
        <h2>Backend Developers</h2>
      <Backend
        members={backendMembers}
        updateAllocation={allocateBackendMember}
        updateComment={updateComment}
      />
      </div>
      <br />    
       <div className="frontend">
        <h2>Project Allocation</h2>
      <Allocation 
         members={allocatedMembers}
      />
      </div>
      <br />
    </div>
  );
}

export default App;
