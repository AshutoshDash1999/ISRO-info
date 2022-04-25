import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../../Components/InfoCard";

function Home() {
  return (
    <div className="flex justify-center cursor-pointer">
      <Link to="/isro/spacecrafts">
        <InfoCard title="Spacecrafts" />
      </Link>
      <Link to="/isro/launchers">
        <InfoCard title="Launchers" />
      </Link>
      <Link to="/isro/customerSatellites">
        <InfoCard title="Customer Satellites" />
      </Link>
      <Link to="/isro/centers">
        <InfoCard title="Centres" />
      </Link>
    </div>
  );
}

export default Home;
