import React, {useState, useRef, useEffect, useContext} from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";




function LoginForm() {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg("");
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/user/identification", ({ email, password}), {headers: { "Content-Type": "application/json"}, widthcredentials: true});
      console.log(JSON.stringify(response?.data));
      setAuth({ email, password})
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
          setErrMsg("Le serveur ne répond pas")
      } else if (err.response?.status === 400) {
        setErrMsg("Mot de passe ou email oublié");
      } else if (err.response?.status === 401) {
        setErrMsg("Accés refusé");
      } else {
        setErrMsg("Authentification refusé")
      }
      errRef.current.focus();
    }
    
  }  
 
  return (
 
    <>
    { success ? ( <div className="formLogin"> <h1>Vous etes connecté !!</h1> <br /> <p> <a href="#">Retour à l'acceuil</a> </p> </div> ) :(

      
    <div className="formLogin">
     
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <div>
        
          <h2 className="titreForm">Identification</h2>
          <div>
            <label htmlFor="email" className="labelEmailLogin">
              Email
            </label>
            <input
              type="text"
              // name="emailInp"
              id="email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="emailInp"
              required
            ></input>
             <FontAwesomeIcon
              icon={faEnvelope}
              className="logo-mail"
            ></FontAwesomeIcon>
            <div className="ligne3"></div>
          </div>
          <div>
            <label htmlFor="password" class="labelPassword">
              Password
            </label>
            <input
              type="password"
              // name="passwordInp"
              id="password"
              ref={userRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="passwordInp"
              required
            ></input>
            <FontAwesomeIcon icon={faLock} className="logo-lock"></FontAwesomeIcon>
            <div className="ligne4"></div>
          </div>
          <input type="submit" value="SE CONNECTER" className="buttonInp" />
          <p>Besoin de réserver ?!<br/> <span className="line">{/*mettre la route pour l'inscription*/}<a href="#">S'inscrire</a></span></p>
        </div>

      </form>
      
      </div>
    
    )}
    </>
  );
  

  }
export default LoginForm;
