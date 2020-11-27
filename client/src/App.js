
import './App.css';
import { Route } from "react-router-dom";
import Login from './Components/Login'
function App() {
  return (
    <div className="App">
      <Route exact path={"/"} render={() => <Login></Login>}></Route>
    </div>
  );
}

export default App;
