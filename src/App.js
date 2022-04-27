import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InfoCard from "./Components/InfoCard";
import Home from "./Pages/Home/Home";
import Spacecrafts from "./Pages/Spacecrafts/Spacecrafts";
import Launchers from "./Pages/Launchers/Launchers";
import CustomerSatellites from "./Pages/CustomerSatellites/CustomerSatellites";
import Centers from "./Pages/Centers.js/Centers";

function App() {
  return (
    <div className="App p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="isro/spacecrafts" element={<Spacecrafts />} />
        <Route path="isro/launchers" element={<Launchers />} />
        <Route
          path="isro/customerSatellites"
          element={<CustomerSatellites />}
        />
        <Route path="isro/centers" element={<Centers />} />
      </Routes>
    </div>
  );
}

export default App;
