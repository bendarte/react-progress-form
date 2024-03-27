// Importing the `useState` hook from the React library and the stylesheet for this component
import { useState } from "react";
import "../styles/stepthree.css";

// Defining a type for the add-ons data and a type for the props that this component receives
type AddonsData = {
  online: number;
  storage: number;
  custom: number;
};

type AddonsDataFormProps = AddonsData & {
  updateFields: (fields: Partial<AddonsData>) => void;
};

// Defining the StepThree component that receives props of type `AddonsDataFormProps`
const StepThree = ({ updateFields }: AddonsDataFormProps) => {
  // Initializing state variables for each add-on, initially set to `false`
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [custom, setCustom] = useState(false);

  // Rendering the component
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>

        <div className="addons">
          {/* Render the online add-on */}
          <div
            style={{
              border: online ? "solid black 2px" : "solid blue 1px",
            }}
            className="choice online"
            onClick={() => {
              // Toggle the online add-on state and update the fields passed in as props
              setOnline(!online);
              updateFields({ online: online ? 0 : 1 });
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Online Service</h2>
                <p>Access to multiplayer games</p>
              </div>

              <div>
                <span>+$1/mo</span>
              </div>
            </div>
          </div>

          {/* Render the storage add-on */}
          <div
            className="choice storage"
            onClick={() => {
              // Toggle the storage add-on state and update the fields passed in as props
              setStorage(!storage);
              updateFields({ storage: storage ? 0 : 2 });
            }}
            style={{
              border: storage ? "solid black 2px" : "solid blue 1px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>

              <div>
                <span>+$2/mo</span>
              </div>
            </div>
          </div>

          {/* Render the custom add-on */}
          <div
            className="choice custom"
            onClick={() => {
              // Toggle the custom add-on state and update the fields passed in as props
              setCustom(!custom);
              updateFields({ custom: custom ? 0 : 2 });
            }}
            style={{
              border: custom ? "solid black 2px" : "solid blue 1px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>

              <div>
                <span>+$2/mo </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
// Exporting the `StepThree` component as the default export
