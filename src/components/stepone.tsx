import React, { useState } from "react"; // import React and useState hook from react package
import "../styles/stepone.css"; // import css file for component styling

type UserData = {
  // define type for user data
  name: string;
  email: string;
  phone: string;
};

type UserFormProps = UserData & {
  // define type for props that include user data and a function to update fields
  updateFields: (fields: Partial<UserData>) => void;
};

const stepone = ({ name, email, phone, updateFields }: UserFormProps) => {
  // define functional component called "stepone" that accepts UserFormProps as props
  return (
    // component markup
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className="step">
          <div className="form-wrapper">
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              required
              autoComplete="none"
              onChange={(
                e // update the name field with user input on change
              ) =>
                updateFields({
                  name: e.target.value,
                })
              }
            />
            <label htmlFor="Email">Email Address:</label>
            <input
              type="email"
              name=""
              autoComplete="none"
              required
              id=""
              value={email} // set the email field to its initial value from props
              onChange={(
                e // update the email field with user input on change
              ) =>
                updateFields({
                  email: e.target.value,
                })
              }
            />
            <label htmlFor="Phone Number">Phone Number:</label>
            <input
              type="tel"
              name="Number"
              required
              autoComplete="none"
              id=""
              value={phone} // set the phone field to its initial value from props
              onChange={(
                e // update the phone field with user input on change
              ) =>
                updateFields({
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepone; // export the component for use in other parts of the application
