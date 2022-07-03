// import Navbar from "./Components/Navbar";
import "./App.css";
// import Frontend from "./Components/Frontend";
// import {datafrontend} from '../src/Details/DataFrontend';
// import Backend from "./Components/Backend";
// import {databackend} from "../src/Details/DataBackend";
// import Allocation from "./Components/Allocation";
import React, { useEffect, useState } from 'react';
import Modal from "./Components/Modal";
import useModal from './Components/useModal';

 
function App() {
  // Frontend Table Records
  // const [frontendObjects, setfrontendObjects] = useState([]);
 
//   useEffect(() => {
//     if (!localStorage.getItem("datafrontend"))
//       localStorage.setItem("datafrontend", JSON.stringify(datafrontend));

//     var frontendMems = localStorage.getItem("datafrontend");
//     setfrontendObjects(JSON.parse(frontendMems));
//   }, []);

//   const AllocatingFontend = (sn) => {
//     for (var i = 0; i < frontendObjects.length; i++) {
//       if (frontendObjects[i].sn === sn) {
//         frontendObjects[i].allocation = true;
//         setallocatedObjects([...allocatedObjects, frontendObjects[i]]);
//         localStorage.setItem("allocated", JSON.stringify([...allocatedObjects, frontendObjects[i]]));

//         frontendObjects.splice(i, 1);
//         break;
//       };
//     }
//     localStorage.setItem("datafrontend", JSON.stringify(frontendObjects));
//   };

//   //Backend Table Records
  
//   const [backendObjects, setbackendObjects] = useState([]);

//   useEffect(() => {
//       if (!localStorage.getItem("databackend"))
//       localStorage.setItem("databackend", JSON.stringify(databackend));

//     var backendMems = localStorage.getItem("databackend");
//     setbackendObjects(JSON.parse(backendMems));

//   }, []);

//   const AllocatingBackend = (sn) => {
//     for (var i = 0; i < backendObjects.length; i++) {
//       if (backendObjects[i].sn ===sn) {
//         backendObjects[i].allocation = true;
//         setallocatedObjects([...allocatedObjects, backendObjects[i]]);
//         localStorage.setItem("allocated", JSON.stringify([...allocatedObjects, backendObjects[i]]));

//         backendObjects.splice(i, 1);
//         break;
//       };
//     }
//     localStorage.setItem("databackend", JSON.stringify(backendObjects));
//   };


// // Project Allocated Records

//   const [allocatedObjects, setallocatedObjects] = useState([]);

//   useEffect(() => {
//     var allocatedMems = localStorage.getItem("allocated");
//     if (allocatedMems)
//       setallocatedObjects(JSON.parse(allocatedMems));
//   }, []);

//   //Updating Comment Box

//   const updateComment = (sn,event) => {
//     const value = event.target.value;
//     if (containObject(sn, frontendObjects)) {
//       const newRecord = updatedCommentRecord(frontendObjects, sn, value);
//       setfrontendObjects(newRecord);
//       localStorage.setItem("datafrontend", JSON.stringify(newRecord));
//     } 
//     else if (containObject(sn, backendObjects)) {
//       const newRecord = updatedCommentRecord(backendObjects, sn, value);
//       setbackendObjects(newRecord);
//       localStorage.setItem("databackend", JSON.stringify(newRecord));
//     } 
//   };
  
//   function containObject(sn, Record) {
//     for (let i = 0; i < Record.length; i++) {
//       if (Record[i].sn === sn) {
//         return true;
//       }
//     }
//     return false;
//   }

//   const updatedCommentRecord = (Record, sn, comment) => {
//     const newRecord = Record.map((item) => {
//       if (item.sn === sn) {
//         const updatedItem = {
//           ...item,
//           comments: comment,
//         };
//         return updatedItem;
//       }
//       return item;
//     });
//     return newRecord;
//   };

  
//

const {isShowing, toggle} = useModal();

  return (
    <div>
      {/* <Navbar/>
      <div className="frontend">
        <h2>Frontend Developers</h2>
      <Frontend
        rows={frontendObjects}
        updateAllocation={AllocatingFontend}
        updateComment={updateComment}
      />
  
      </div>
      <br></br>
       <div className="backend">
        <h2>Backend Developers</h2>
      <Backend
        rows={backendObjects}
        updateAllocation={AllocatingBackend}
        updateComment={updateComment}
      />
      </div>
      <br />    
       <div className="frontend">
        <h2>Project Allocation</h2>
      <Allocation 
         rows={allocatedObjects}
      />
      </div> */}
      {/* <br /> */}
      <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
    </div>
  );
}
//

export default App;
