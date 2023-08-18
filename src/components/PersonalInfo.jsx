import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

function PersonalInfo() {
  const { formData, setFormData } = useContext(FormContext);

  console.log("FF", formData, setFormData);

  const [infoState, setInfoState] = useState({});

  const handleChange = (event) => {
    setInfoState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    setFormData({
      personalInfo: {...infoState},
    });
  }, [infoState]);

  return (
    <div className="PI">
      <h6>Personal Information</h6>
      <br />
      <input
        type="text"
        className="input"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        className="input"
        name="profession"
        onChange={handleChange}
        placeholder="Profession"
      />
      <input
        type="number"
        className="input"
        name="contact"
        onChange={handleChange}
        placeholder="Contact"
      />
      <input
        type="email"
        className="input"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        className="input"
        name="address"
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
  );
}

export default PersonalInfo;
