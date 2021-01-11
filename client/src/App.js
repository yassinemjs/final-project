import NavBar from './Components/NavBar'; 
import Filter from './Components/Filter';
import AddUser from './Components/AddUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


const App =()=>{
  return(
   <Router>
     <div className="App">
       <NavBar/>
       <Switch>
         <Route path="/addUser" component={AddUser}/>
         <Route path="/filter" component={Filter}/>
       </Switch>
     </div>
   </Router>
  
  );}

export default App;