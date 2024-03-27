import { FormEvent, useState } from "react";
import "./index.css";
import StepOne from "./components/stepone";
import StepTwo from "./components/steptwo";
import StepThree from "./components/stepthree";
import StepFour from "./components/stepfour";
import Completed from "./components/completed";
import { useMultistepForm } from "./hooks/useMultistepForm";

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  price: number;
  total: number;
  online: number;
  custom: number;
  storage: number;
};

const INITAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  price: 0,
  online: 0,
  storage: 0,
  custom: 0,
  total: 0,
};

function App() {
  // Initialize state to hold form data
  const [data, setData] = useState(INITAL_DATA);

  // Update form data fields
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Log the final form data to the console
  const FinalData = console.log(data);

  // Use a custom hook to implement the multistep form functionality and pass / update data to each component
  const { steps, currentStepIndex, next, back } = useMultistepForm([
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo {...data} updateFields={updateFields} />,
    <StepThree {...data} updateFields={updateFields} />,
    <StepFour {...data} updateFields={updateFields} />,
    <Completed />,
  ]);

  // Handle form submission
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
    FinalData;
  }

  return (
    <div>
      <div className="form-container">
        <div className="count-container">
          <div className="form-step-count">
            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor:
                    currentStepIndex === 0 ? "hsl(228, 100%, 84%)" : "",
                }}
              >
                <div
                  className="number"
                  style={{
                    color: currentStepIndex === 0 ? "black" : "white",
                  }}
                >
                  1
                </div>
              </div>
              <div className="count-container">
                <h2>Step 1</h2>
                <p>YOUR INFO</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor:
                    currentStepIndex === 1! ? "hsl(228, 100%, 84%)" : "",
                }}
              >
                <div
                  className="number"
                  style={{
                    color: currentStepIndex === 1 ? "black" : "white",
                  }}
                >
                  2
                </div>
              </div>
              <div className="count-container">
                <h2>Step 2</h2>
                <p>Select Plan</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor:
                    currentStepIndex === 2 ? "hsl(228, 100%, 84%)" : "",
                }}
              >
                <div
                  className="number"
                  style={{
                    color: currentStepIndex === 2 ? "black" : "white",
                  }}
                >
                  3
                </div>
              </div>
              <div className="count-container">
                <h2>Step 3</h2>
                <p>Add-ons</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor:
                    currentStepIndex === 3 ? "hsl(228, 100%, 84%)" : "",
                }}
              >
                <div
                  className="number"
                  style={{
                    color: currentStepIndex === 3 ? "black" : "white",
                  }}
                >
                  4
                </div>
              </div>
              <div className="count-container">
                <h2>Step 4</h2>
                <p>Summary</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="step-container">
          {steps}
          {currentStepIndex <= 3 ? (
            <div className="button-container">
              {currentStepIndex !== 0 && (
                <button type="button" onClick={back} className="back-btn">
                  Go Back
                </button>
              )}
              <button type="submit" onSubmit={onSubmit} className="next-btn">
                {currentStepIndex === 3 ? "Confirm" : "Next"}
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default App;
