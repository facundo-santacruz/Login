
import './App.css';
import { Route } from "react-router-dom";
import Login from './Components/Login'
import CrearUsuario from './Components/UserFrom'
function App() {
  return (
    <div className="App">
      <Route exact path={"/"} render={() => <Login></Login>}></Route>
      <Route exact path={"/createUser"} render={() => <CrearUsuario></CrearUsuario>}></Route>

    </div>
  );
}

export default App;
