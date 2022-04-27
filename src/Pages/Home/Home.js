import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../../Components/InfoCard";

function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div>
        <h1 className="title text-gray-200 text-6xl text-center">ISRO Info</h1>
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
          <InfoCard title="Centers" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
