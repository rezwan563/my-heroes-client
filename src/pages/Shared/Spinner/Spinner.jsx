import React, { useState } from "react";
import { FadeLoader } from "react-spinners";

const Spinner = () => {
  const [color, setColor] = useState("#36454F");
  return (
    <div className="h-screen flex justify-center items-center">
      <FadeLoader color={color}></FadeLoader>
    </div>
  );
};

export default Spinner;
