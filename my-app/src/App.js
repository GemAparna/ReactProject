import Navbar from "./Components/Navbar";
import "./App.css"
import Frontend from "./Components/Frontend";
import Backend from "./Components/Backend";
 
function App() {
  return (
    <div className="division">
   <Navbar/>
   <br></br> 
   <h2>Frontend</h2>
   <div className="frontend">
   <Frontend/>
   </div>
   <br></br>
   <div className="frontend">
   <h2>Frontend</h2>
   <Frontend/>
   </div>
   <div className="backend">
   <h2>Backend</h2>
   <Backend/>
   </div>
    </div>
  );
}

export default App;
