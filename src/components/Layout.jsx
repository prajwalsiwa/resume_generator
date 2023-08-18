import React, { useState } from "react";
import LeftPane from "./LeftPane";
import { FormContext } from "../context/FormContext";
import RightPane from "./RightPane";

function Layout() {
  const [formData, setFormData] = useState([]);

  return (
    <div className="d-flex justify-content-around mt-2">
        <FormContext.Provider value={{formData: formData, setFormData: setFormData}}>
          <LeftPane />
          <RightPane />
        </FormContext.Provider>
    </div>
  );
}

export default Layout;
