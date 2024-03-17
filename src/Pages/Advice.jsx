import React from "react";
import { SectionTitle } from "../Components";

const Advice = () => {
  return (
    <div className="py-20 " id="advice">
      <SectionTitle text={"Some Advice From Me"} color={"border-blue-400"} />
      {/* a div that serves two reasons - 1.To layout children based on screen
      size, to center children across screen horizontally */}
      <div
        className="mt-10 w-[80%] max-w-screen-xl mx-auto p-10
      bg-blue-400 rounded-lg text-white font-light text-lg tracking-wide"
      >
        <ol className="list-decimal">
          <li>Stay positive with everything</li>
          <li>Be consistent</li>
          <li>And work hard</li>
        </ol>
        <h1 className="mt-3 text-center font-bold text-2xl">
          Yes, in this exact order!
        </h1>
      </div>
    </div>
  );
};

export default Advice;
