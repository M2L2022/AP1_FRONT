import './SignInForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, {useRef} from 'react';

function SignInForm() {
    const prenom = useRef();
    const nom = useRef();
    const email = useRef();
    const password = useRef();
    const telephone = useRef();
    const ligue = useRef();
    const handleRegister = async (e) => {
        e.preventDefault();
        const body = {
            prenom: prenom.current.value,
            nom: nom.current.value,
            email: email.current.value,
            telephone: telephone.current.value,
            password: password.current.value,
            typeLigue: ligue.current.value
        }
        console.log(body);
        try {
           const res = await axios.post("http://localhost:8000/api/users",body)
           console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
  return(
      <div>
        <form onSubmit={handleRegister}>
            <div class="containerForm">
                <h2 class="titreForm">inscriptions</h2>
                
                <div>
                    <label for="prenom" class="labelPrenom">PRENOM</label>
                    <input type="text" name="prenom" id="prenom" class="prenomInp" required maxlength="35" ref={prenom}></input>
                    <FontAwesomeIcon icon={faUser} class='logo-user1'></FontAwesomeIcon>
                    <div class="ligne1"></div>
                </div>
                <div>
                    <label for="nom" class="labelNom">NOM</label>
                    <input type="text" name="nom" id="Nom" class="nomInp" required maxlength="35" ref={nom}></input>
                    <FontAwesomeIcon icon={faUser} class='logo-user2'></FontAwesomeIcon>
                    <div class="ligne2"></div>
                </div>
                <div>
                    <label for="email" class="labelEmail">Email</label>
                    <input type="text" name="email" id="email" class="emailInp" required maxlength="35" ref={email}></input>
                    <FontAwesomeIcon icon={faEnvelope} class='logo-mail'></FontAwesomeIcon>
                    <div class="ligne3"></div>
                </div>
                <div>
                    <label for="password" class="labelPassword">Password</label>
                    <input type="password" name="password" id="password" class="passwordInp" required maxlength="35" ref={password}></input>
                    <FontAwesomeIcon icon={faLock} class='logo-lock'></FontAwesomeIcon>
                    <div class="ligne4"></div>
                </div>
                <div>
                    <label for="telephone" class="labelTelephone">Telephone</label>
                    <input type="text" name="telephone" id="telephone" class="telephoneInp" required maxlength="35" ref={telephone}></input>
                    <FontAwesomeIcon icon={faPhone} class="logo-phone"></FontAwesomeIcon>
                    <div class="ligne5"></div>
                </div>
                <div>
                    <label for="SelectLigue" class="labelSelectLigue"></label>
                    <select name="SelectLigue" id="Ligue" class="SelectLigueInp" ref={ligue}>
                        <option >Selectionnez une salle</option>
                        <option value="1">Football</option>
                        <option value="2">Tennis</option>
                        <option value="3">Volley-ball</option>
                        <option value="4">Basketball</option>
                        <option value="5">Halterophilie</option>
                        <option value="6">Rugby</option>
                    </select>
                    <FontAwesomeIcon icon={faTrophy} class="logo-trophy"></FontAwesomeIcon>
                    <div class="ligne6"></div>
                </div>

                <input type='submit' Value='envoyer' class='buttonInp'/>
            </div>
        </form>
    </div>
    );
}

export default SignInForm;