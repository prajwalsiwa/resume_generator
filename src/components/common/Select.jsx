import React, { useEffect, useMemo } from "react";

/*
options = [
    {
        label: "Github",
        value: "github"
    },
]
*/
const Select = ({options,value, onChange, name="resume-select"}) => {

    const handleChange = (event) =>{
        console.table(event.target.value)
        onChange(name, event.target.value)
    }

  return (
    <div key={name}>
      <select
      key={name}
      name={name}
      className="form-select" aria-label="Default select example"
      onChange={handleChange}
      placeholder="Please select"
      >
        {
            options.map((option, index) =>(
                <option value={option.value}
                    selected={option.value === value}
                >{option.label}</option>
            ))
        }
      </select>
    </div>
  );
};

export default Select;




