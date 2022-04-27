import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoCard from "../../Components/InfoCard";
import { Bars } from "react-loader-spinner";
import LoadingBar from "../../Components/LoadingBar";

function CustomerSatellites() {
  const [customerSatellites, setCustomerSatellites] = useState([]);
  const url = "https://isro.vercel.app/api/customer_satellites";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCustomerSatellites(response.data.customer_satellites);
        // console.log(response.data.customer_satellites);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="title text-gray-200 text-6xl text-center">
        ISRO Customer Satellites
      </h1>

      {customerSatellites.length > 1 ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {customerSatellites.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.id}
                p1={item.country}
                p2={item.launcher}
                p3={`${item.mass} Kg`}
                p4={item.launch_date}
              />
            );
          })}
        </div>
      ) : (
        <LoadingBar />
      )}
    </div>
  );
}

export default CustomerSatellites;
