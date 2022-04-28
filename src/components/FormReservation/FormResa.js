import "./FormResa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import axios from "axios";

function FormResa() {
  const dateRef = useRef();
  const salleRef = useRef();
  const handleResa = async (e) => {
    e.preventDefault();

    const body = {date:dateRef.current.value, salle:salleRef.current.value, repas: 3001, organisateur: 105 }
    

    try {
        axios.post("http://localhost:8000/reunions/reunion", body);
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleResa}>
        <div class="containerFormResa">
          <h2 class="titreForm">Reservation</h2>
          <div>
            <label for="dateResa" class="labelResa"></label>
            <input
              type="date"
              name="ResaDate"
              id="Resa"
              class="ResaInp"
              ref={dateRef}
            ></input>
            <FontAwesomeIcon
              icon={faCalendar}
              class="logo-Resa"
            ></FontAwesomeIcon>
            <div class="ligne3"></div>
          </div>
          <div>
            <label for="SelectRoom" class="labelSelectRoom"></label>
            <select
              name="SelectRoom"
              id="SelectRoom"
              class="SelectRoomInp"
              ref={salleRef}
            >
              <option>Selectionnez une salle</option>
              <option value="1001">Majorelle</option>
              <option value="Gruber">Gruber</option>
              <option value="Lamour">Lamour</option>
              <option value="Daume">Daume</option>
              <option value="Baccarat">Baccarat</option>
            </select>
            <FontAwesomeIcon
              icon={faHotel}
              class="logo-SelectRoom"
            ></FontAwesomeIcon>
            <div class="ligne4"></div>
          </div>
          <input type="submit" value="reserver" class="buttonInp" />
        </div>
      </form>
    </div>
  );
}

export default FormResa;
