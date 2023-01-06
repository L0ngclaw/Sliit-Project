import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Favbutton = () => {
  return (
    <div>
      <button className="border-2 border-primary px-2 py-1 text-primary rounded-lg">
       <StarIcon className="w-7"/>
      </button>
    </div>
  );
};

export default Favbutton;
