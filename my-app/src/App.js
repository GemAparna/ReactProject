import Navbar from "./Components/Navbar";
import "./App.css"
import Frontend from "./Components/Frontend";
import Backend from "./Components/Backend";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Details';
 
function App() {
  return (
  
    <div className="division">
   <Router>
   <Navbar/>
  <ul>
     <li>
     <Link to="/details">Add New Entries</Link>
     </li>
  </ul>
       
 <Switch>
 <Route exact path="/details">
     <Details />
   </Route>
 </Switch>
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
   </Router>
    </div>
  );
}

export default App;
