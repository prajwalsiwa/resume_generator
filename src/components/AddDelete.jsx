import React from "react";
import LeftPane from "./LeftPane";
import { useState } from "react";

const AddDelete = () => {
  const [socialMediaCount, setSocialMediaCount] = useState([1]);
  const [delsocialMedia, setDelSocialMedia] = useState(socialMediaCount);
  const [educationCount, setEducationCount] = useState([1]);
  const [delEducationCount, setDelEducationCount] = useState([1]);
  const [experienceCount, setExperienceCount] = useState([1]);
  const [delExperienceCount, setDelExperienceCount] = useState(experienceCount);
  const [achievementCount, setAchievementCount] = useState([1]);
  const [delAchiecvementCount, setDelAchievementCount] =
    useState(achievementCount);
  const [projectCount, setProjectCount] = useState([1]);
  const [delProject, setDelProject] = useState(projectCount);
  const AddSocialMedia = () => {
    setSocialMediaCount([...socialMediaCount, socialMediaCount.length + 1]);
  };
  const DeleteSocialMedia = () => {
    if (socialMediaCount.length === 1) {
      setDelSocialMedia([socialMediaCount]);
    } else {
      setDelSocialMedia([socialMediaCount.shift()]);
    }
  };
  const AddProjects = () => {
    setProjectCount([...projectCount, projectCount.length + 1]);
  };
  const DelProjects = () => {
    if (projectCount.length === 1) {
      setDelProject([projectCount]);
    } else {
      setDelProject([projectCount.shift()]);
    }
  };
  const addEducation = () => {
    setEducationCount([...educationCount, educationCount.length + 1]);
  };
  const delEducation = () => {
    if (educationCount.length === 1) {
      setDelEducationCount(educationCount);
    } else {
      setDelEducationCount([educationCount.shift()]);
    }
  };
  const addExperience = () => {
    setExperienceCount([...experienceCount, experienceCount.length + 1]);
  };
  const delExperience = () => {
    if (experienceCount.length === 1) {
      setDelExperienceCount([experienceCount]);
    } else {
      setDelExperienceCount([experienceCount.shift()]);
    }
  };
  const addAchievement = () => {
    setAchievementCount([...achievementCount, achievementCount.length + 1]);
  };
  const delAchievement = () => {
    if (achievementCount.length === 1) {
      setDelAchievementCount([achievementCount]);
    } else {
      setDelAchievementCount([achievementCount.shift()]);
    }
  };
  return (
    <div>
      <LeftPane
     Layout
      ></LeftPane>
    </div>
  );
};

export default AddDelete;
