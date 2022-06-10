import "./FormResa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect, useState } from "react";
import axios from "../../config/axios";
import { useAuth } from "../../context/AuthProvider";

function FormResa() {
  const [resa, setResa] = useState([]);
  const {auth} = useAuth();
  const getSalles = async () => {
    try {
      const res = await axios.get("/admin/salle/room");
      setResa(res.data.success);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getSalles();
  }, []);

  const dateRef = useRef();
  const salleRef = useRef();
  const mealRef = useRef();
  const handleResa = async (e) => {
    e.preventDefault();

    const body = {
      date: dateRef.current.value,
      salle: salleRef.current.value,
      repas: mealRef.current.value,
      organisateur: auth.uid, //passer id de l'utilisateur connecté
    };

    try {
      axios.post("/reunions/reunion", body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleResa}>
        <div className="containerFormResa">
          <h2 className="titreForm">Reservation</h2>
          <div>
            <label htmlFor="dateResa" className="labelResa"></label>
            <input
              type="date"
              // name="ResaDate"
              // id="Resa"
              className="ResaInp"
              ref={dateRef}
            ></input>
            <FontAwesomeIcon
              icon={faCalendar}
              className="logo-Resa"
            ></FontAwesomeIcon>
            <div className="ligne3"></div>
          </div>
          <div>
            <label htmlFor="SelectRoom" className="labelSelectRoom"></label>
            <select
              // name="SelectRoom"
              // id="SelectRoom"
              className="SelectRoomInp"
              ref={salleRef}
            >
              <option>Selectionnez une salle</option>
              {resa.map((item) => (
                <option key={`room-${item.ID_SALLE}`} value={item.ID_SALLE}>{item.NOM_SALLE}</option>
              ))}
              {/* <option value="1001">Majorelle</option>
              <option value="Gruber">Gruber</option>
              <option value="Lamour">Lamour</option>
              <option value="Daume">Daume</option>
              <option value="Baccarat">Baccarat</option> */}
            </select>
            <FontAwesomeIcon
              icon={faHotel}
              className="logo-SelectRoom"
            ></FontAwesomeIcon>
            <div className="ligne4"></div>
          </div>

          <div>
            <label htmlFor="SelectMeal" className="labelSelectMeal"></label>
            <select
              // name="SelectRoom"
              // id="SelectRoom"
              className="SelectMealInp"
              ref={mealRef}
            >
              <option>Selectionnez un repas</option>
              {/* {resa.map((item) => (
                <option key={`room-${item.ID_SALLE}`} value={item.ID_SALLE}>{item.NOM_SALLE}</option>
              ))} */}
              <option value="3001">Petit Déjeuner</option>
              <option value="3002">Collation</option>
              <option value="3003">Encas</option>
            </select>
            {/* <FontAwesomeIcon
              icon={faHotel}
              className="logo-SelectRoom"
            ></FontAwesomeIcon> */}
            <div className="ligne5"></div>
          </div>

          <input type="submit" value="reserver" className="buttonInp" />
        </div>
      </form>
    </div>
  );
}

export default FormResa;