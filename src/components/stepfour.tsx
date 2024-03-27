import "../styles/stepfour.css";

// Define the type of data expected for the summary section
type SummaryData = {
  name: "";
  email: "";
  phone: "";
  plan: "";
  price: 0;
  online: 0;
  storage: 0;
  custom: 0;
  total: 0;
};

// Define the type of props that the stepfour component expects
interface SummaryDataFormProps extends SummaryData {
  updateFields: (fields: Partial<SummaryData>) => void; // A function that accepts a partial SummaryData object and updates the relevant fields
}

// Define the stepfour component that renders the summary section of the form
const stepfour = (FinalData: any, { updateFields }: SummaryDataFormProps) => {
  // Calculate the total cost of the plan with add-ons
  const Total =
    FinalData.online + FinalData.storage + FinalData.custom + FinalData.price;

  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>

        {/* Display the plan and its price */}
        <div className="total-items">
          <div className="item-content plan">
            <h2>{FinalData.plan}</h2>
            <p>${FinalData.price}</p>
          </div>

          {/* Display the online service add-on and its price */}
          <hr />
          <div className="item-content">
            <h2>Online Service</h2>
            {FinalData.online < 1 ? <p>N/A</p> : <p>${FinalData.online}/mo</p>}
          </div>

          {/* Display the larger storage add-on and its price */}
          <div className="item-content">
            <h2>Larger Storage</h2>
            {FinalData.storage < 1 ? (
              <p>N/A</p>
            ) : (
              <p>${FinalData.storage}/mo</p>
            )}
          </div>

          {/* Display the custom profile add-on and its price */}
          <div className="item-content">
            <h2>Custom</h2>
            {FinalData.custom < 1 ? <p>N/A</p> : <p>${FinalData.custom}/mo</p>}
          </div>
        </div>

        {/* Display the total cost of the plan with add-ons */}
        <div className="item-content total">
          <h2>Total (monthly)</h2>
          <p>+${Total}/mo</p>
        </div>
      </div>
    </div>
  );
};

export default stepfour;
