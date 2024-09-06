import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const PricingOption = ({ plan, isActive, onPlanClick }) => {
  return (
<div
  className={`rounded-lg shadow-md p-4 hover:shadow-lg hover:bg-gray-100 ${isActive ? "bg-gray-200" : ""}`}
  // onClick={handleClick}
>

  {/* AmitStredz */}
  {/* Alamaledndu */}
      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
      <p className="text-gray-600 mb-2 flex items-center pl-5">
        <FiClock />
        {plan.delivery}
      </p>
      <ul className=" space-y-2 mb-4 ml-5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <TiTick />
            {feature}
          </li>
        ))}
      </ul>

      <div>
        <button className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
          Continue <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default PricingOption;
