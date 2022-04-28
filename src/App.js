import { BrowserRouter as Router} from "react-router-dom";
import React, { useState }from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./components/AllRoutes/AllRoutes";

function App() {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  
  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <div className="App">
      <Router>
        <Navbar></Navbar>
          <AllRoutes/>
        <Footer></Footer>
      </Router>
     
    </div>
    //  </AuthContext.Provider> 
  );
}

export default App;
