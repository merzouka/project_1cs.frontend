import React, { useState, useEffect } from "react";

import axios from "axios";
import { AxiosInstance } from "@/config/axios";

const WinnersComponent = () => {
  const [winners, setWinners] = useState([]);
  const id_utilisateur = 123; // Replace with the actual user ID

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await AxiosInstance.get(
          `http://localhost:8000/winners_by_baladiya/`
        );
        setWinners(response.data);
                console.log(response.data);
      } catch (error) {
        console.error("Error fetching winners:", error);
      }
    };

    fetchWinners();
  }, [id_utilisateur]); // Dependency array with id_utilisateur

  return (
    <div>
      <h2>Winners List</h2>
      <ul>
        {winners.map((winner) => (
          <li key={winner.id_user}>{`${winner.first_name} ${winner.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default WinnersComponent;
