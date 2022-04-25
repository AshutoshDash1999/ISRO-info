import React from "react";

function InfoCard(props) {
  return (
    <div className=" bg-purple-200 rounded-md p-2 m-2">
      <p></p>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <p></p>
    </div>
  );
}

export default InfoCard;
