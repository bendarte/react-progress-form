import React from "react";
import "../styles/steptwo.css";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

// Define the type of the data that the form will collect
type PlanData = {
  plan: string;
  price: number;
};

// Define the type of the props that will be passed to this component, which include the collected data and an updateFields function
type PlanDataFormProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void;
};

// Define the component using destructuring of the props
const steptwo = ({ plan, price, updateFields }: PlanDataFormProps) => {
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Select Your Plan</h1>
          <p>You have the option of Monthly or Yearly billing.</p>
        </div>

        

        <div className="plan-selection">
          <button
            type="button"
            className="plan-btn"
            onClick={() => updateFields({ plan: "Arcade", price: +2 })}
          >
            <img src={Arcade} alt="" />
            <h2>Arcade</h2>
            <span>$2 / monthly</span>
          </button>
          <button
            type="button"
            className="plan-btn"
            onClick={() => updateFields({ plan: "Advanced", price: +4 })}
          >
            <img src={Advanced} alt="" />
            <h2>Advanced</h2>
            <span>$4 / monthly</span>
          </button>

          <button
            type="button"
            className="plan-btn"
            onClick={() => updateFields({ plan: "Pro", price: +6 })}
          >
            <img src={Pro} alt="" />
            <h2>Pro</h2>
            <span>$6 / monthly</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default steptwo;
