import React from "react";
import { Bars } from "react-loader-spinner";

function LoadingBar() {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      <Bars
        heigth="100"
        width="200"
        color="white"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}

export default LoadingBar;
