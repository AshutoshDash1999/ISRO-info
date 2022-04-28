import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoCard from "../../Components/InfoCard";
import { Bars } from "react-loader-spinner";
import LoadingBar from "../../Components/LoadingBar";

function Spacecrafts() {
  const [spacecraftsList, setSpacecraftsList] = useState([]);
  const url = "https://isro.vercel.app/api/spacecrafts";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSpacecraftsList(response.data.spacecrafts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="title text-gray-200 text-6xl text-center">
        ISRO Spacecrafts
      </h1>

      {spacecraftsList.length > 1 ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {spacecraftsList.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.name}
                onClickFunction={() =>
                  window.open(
                    `https://www.google.com/search?q=isro%20satellite%20${item.name}`,
                    "_blank"
                  )
                }
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

export default Spacecrafts;
