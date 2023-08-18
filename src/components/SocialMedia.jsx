import React, { useContext, useState, useEffect, useMemo } from "react";
import { FormContext } from "../context/FormContext";
import Select from "./common/Select";

const SocialMedia = () => {
  const options = [
    {
      label: "Github",
      value: "github",
    },
    {
      label: "Facebook",
      value: "facebook",
    },
    {
      label: "LinkedIn",
      value: "linkedin",
    },
    {
      label: "Twitter",
      value: "twitter",
    },
  ];

  const defaultSocialContact = {
    type: "github",
    value: null,
  };
  const [socialContactList, setSocialContactList] = useState([
    defaultSocialContact,
  ]);

  const selectedMediaTypes = useMemo(() => {
    return socialContactList.map((socialContact) => socialContact.type);
  }, [socialContactList]);

  const AddSocialMedia = () => {
    const getNextDefaultSocialContact = () => {
        // console.log(selectedMediaTypes)
      const nextOptions = options.filter(
        (option) => !selectedMediaTypes.includes(option.value)
      );
      console.log("nextoptions", nextOptions,"selectedMediaTypes", selectedMediaTypes);
      return {
        type: nextOptions[0].value,
        value: null,
      };
    };
    setSocialContactList((prevState) => [
      ...prevState,
      getNextDefaultSocialContact(),
    ]);
  };

  const DeleteSocialMedia = () => {
    if (socialContactList.length !== 1) {
      setSocialContactList((prevState) => [...prevState.slice(0, -1)]);
    }
  };

  const onSelectChange = (contactIndex, contactType) => {
    socialContactList[contactIndex].type = contactType;
    console.log("contacttype",contactType)
    setSocialContactList([...socialContactList]);
    console.log("social contact list",socialContactList)
  };
  const handleChange = (event, contactIndex) => {
    // setSocioState((prevState) => ({
    //   ...prevState,
    //   [event.target.name]: event.target.value,
    // }));
  };

//   console.log("fdsafdas", socialContactList, selectedMediaTypes);

  const filteredOptions = (socialContactType) => {
    console.log("types",socialContactType)
    const result = options.filter(
      (option, optIndex) =>
        option.value === socialContactType ||
        !selectedMediaTypes.includes(option.value)
    );
    console.log(selectedMediaTypes, "result", result);
    return result;
  };

  return (
    <div>
      <div className="SM">
        <h6>Social Media</h6>
        <br />
        {socialContactList.map((socialContact, index) => {
          return (
            <>
              <Select
                key={index}
                options={filteredOptions(socialContact?.type)}
                name={index}
                onChange={onSelectChange}
                value={socialContact?.type}
              />
              <input
                type="text"
                name="socialmedia"
                onChange={handleChange}
                placeholder={`Enter ${socialContact?.type} link`}
              />
            </>
          );
        })}
      </div>
      <button
        className="Add btn btn-sm btn-secondary rounded"
        disabled={socialContactList.length === options.length}
        onClick={AddSocialMedia}
      >
        <i class="bi bi-plus " style={{ fontSize: 20 }}></i>
      </button>
      <button
        className="Del btn btn-sm btn-secondary rounded"
        onClick={DeleteSocialMedia}
      >
        <i class="bi bi-dash " style={{ fontSize: 20 }}></i>
      </button>
    </div>
  );
};

export default SocialMedia;
