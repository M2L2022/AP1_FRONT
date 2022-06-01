import React, { useEffect, useState } from 'react';
import './CompteUser.css';
import axios from '../../config/axios';
import { useAuth } from '../../context/AuthProvider';


function Compte() {

    const {auth} = useAuth();

    const [users, setUsers] = useState([]);

    const Alldata = async () => {
        console.log(auth);
        const res = await axios.get(`/admin/${auth.uid}`)
        console.log(res.data.success[0]);
        setUsers(res.data.success[0])
    }

    useEffect (() => {
        if (auth) Alldata();
    },[auth])

  return (

    <>
        <div className='compte'>
            <div className="container_compte">
                <h2>Mon compte</h2>
                <ul>
                    <li className='li_compte'>Prenom: {users[0].PRENOM_UTILISATEUR}</li>
                    <li className='li_compte'>Nom: {users[0].NOM_UTILISATEUR}</li>
                    <li className='li_compte'>Email: {users[0].MAIL_UTILISATEUR}</li>
                    <li className='li_compte'>Telephone: 0{users[0].TELEPHONE_UTILISATEUR}</li>
                    <li className='li_compte'>Ligue: {users[0].NOM_LIGUE}</li>
                    {/* {users.map((user, index) => 
                        <li key={`user${index}`}>
                            {user.ID_UTILISATEUR}<br/>{user.NOM_UTILISATEUR}
                        </li>
                    )} */}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Compte;