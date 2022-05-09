import './CompteUtilisateur.css';
import React, { useEffect } from 'react';
import axios from '../../config/axios';
import { useAuth } from '../../context/AuthProvider';

const Compte = () => {

    const uid = useAuth();

    const getDataUser = async () => {
        try {
            const res = await axios.get(`/admin/105`)
            console.log(res.data.success[0][0]);
            const body = [{
                prenom: res.data.success[0][0].PRENOM_UTILISATEUR,
                nom: res.data.success[0][0].NOM_UTILISATEUR,
                mail: res.data.success[0][0].MAIL_UTILISATEUR,
                name: res.data.success[0][0].PASSWORD_UTILISATEUR
            }];
            console.log(body);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect (() => {
        getDataUser();
    }, []);

    return ( 
        <div className="compte">
            <ul>
                <li>{getDataUser.map(({prenom}) => (<p key={prenom}>Ton prenom est {prenom}</p>))}</li>
            </ul>
        </div>
     );
}
 
export default Compte;