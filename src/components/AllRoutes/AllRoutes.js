import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Accueil/Home";
import Cgv from "../../pages/Cgv/Cgv";
import Login from "../../pages/IdentificationUser/LoginUser";
import SignIn from "../../pages/Inscriptions/SignIn";
import NotFound from "../../pages/NotFound/NotFound";
import Reservation from "../../pages/reservation/reservation";
import React from "react";
import Compte from "../../pages/Compte/CompteUser";

const AllRoutes = () => {
    return ( 
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/compte" element={ <Compte />} />
        <Route path="/inscriptions" element={ <SignIn />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path="/login" element={ <Login />} />
        <Route path="/cgv" element={ <Cgv/>} />
        <Route path="/reservations" element={ <Reservation/>} />
      </Routes>
     );
}
 
export default AllRoutes;