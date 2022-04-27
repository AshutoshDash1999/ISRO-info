import React from "react";

function InfoCard(props) {
  return (
    <div className="bg-white/30 rounded-xl p-4 m-4 backdrop-blur-3xl text-gray-200 flex flex-col justify-center items-center cursor-pointer backdrop-contrast-50 ">
      <p className="uppercase ">{props.p1}</p>
      <h1 className="title text-2xl font-bold text-center break-all">
        {props.title}
      </h1>
      <p className="italic ">{props.p2}</p>
      <p>{props.p3}</p>
      <p>{props.p4}</p>
    </div>
  );
}

export default InfoCard;
