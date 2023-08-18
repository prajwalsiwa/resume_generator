import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

const Summary = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [summaryState, setSummaryState] = useState({});
  const handleChange = (e) => {
    setSummaryState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    })
      
    )
  }
  useEffect(() => {
    setFormData({
      summaryInfo: {...summaryState},
    });
  }, [summaryState]);
  return (
    <div>
      <h6>Summary</h6>
      <div className="summary">
        <textarea name="summary" id="" cols="50" rows="8" onChange={handleChange}></textarea>
      </div>
    </div>
  );
};

export default Summary;
