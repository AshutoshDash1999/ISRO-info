import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoCard from "../../Components/InfoCard";
import { Bars } from "react-loader-spinner";
import LoadingBar from "../../Components/LoadingBar";

function Launchers() {
  const [launchersList, setLaunchersList] = useState([]);
  const url = "https://isro.vercel.app/api/launchers";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLaunchersList(response.data.launchers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="title text-gray-200 text-6xl text-center">
        ISRO Launchers
      </h1>

      {launchersList.length > 1 ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {launchersList.map((item) => {
            return <InfoCard key={item.id} title={item.id} />;
          })}
        </div>
      ) : (
        <LoadingBar />
      )}
    </div>
  );
}

export default Launchers;
