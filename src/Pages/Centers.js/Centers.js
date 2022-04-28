import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoCard from "../../Components/InfoCard";
import LoadingBar from "../../Components/LoadingBar";

function Centers() {
  const [centersList, setCentersList] = useState([]);
  const url = "https://isro.vercel.app/api/centres";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCentersList(response.data.centres);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="title text-gray-200 text-6xl text-center">ISRO Centers</h1>

      {centersList.length > 1 ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {centersList.map((item) => {
            return (
              <InfoCard
                key={item.id}
                title={item.name}
                p3={`${item.Place},`}
                p4={item.State}
                onClickFunction={() =>
                  window.open(
                    `https://www.google.com/search?q=isro%20center%20${item.name}`,
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

export default Centers;
