import "./Form.css";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import SocialMedia from "./SocialMedia";

const Form = () => {
  // const [socialMediaCount, setSocialMediaCount] = useState([1]);
  // const [delsocialMedia, setDelSocialMedia] = useState(socialMediaCount);
  const [educationCount, setEducationCount] = useState([1]);
  const [delEducationCount, setDelEducationCount] = useState([1]);
  const [experienceCount, setExperienceCount] = useState([1]);
  const [delExperienceCount, setDelExperienceCount] = useState(experienceCount);
  const [achievementCount, setAchievementCount] = useState([1]);
  const [delAchiecvementCount, setDelAchievementCount] =
    useState(achievementCount);
  const [projectCount, setProjectCount] = useState([1]);
  const [delProject, setDelProject] = useState(projectCount);
  // const AddSocialMedia = () => {
  //   setSocialMediaCount([...socialMediaCount, socialMediaCount.length + 1]);
  // };
  // const DeleteSocialMedia = () => {
  //   if (socialMediaCount.length === 1) {
  //     setDelSocialMedia([socialMediaCount]);
  //   } else {
  //     setDelSocialMedia([socialMediaCount.shift()]);
  //   }
  // };
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="header">
        <div className="upperSection">
          <h3 id="load">Load Data</h3>
          <button className="button">🔃</button>
          <h3 id="save">Save Data</h3>
          <button className="button">📥</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <PersonalInfo />
       <Summary />
       <SocialMedia />
        {/* <div className="SM">
          <h6>Social Media</h6>
          <br />
          {socialMediaCount.map((count) => {
            return (
              <>
                <input
                  type="text"
                  name={`socialmedia_${count}`}
                  placeholder="Social Media"
                />
              </>
            );
          })}
        </div>
        <button className="Add" onClick={AddSocialMedia}>
          +
        </button>
        <button className="Del" onClick={DeleteSocialMedia}>
          -
        </button> */}
        
        <h6>Education</h6>

        {educationCount.map(() => {
          return (
            <>
              <div className="Education">
                <input type="text" name="" id="" placeholder="Education" />
              </div>
              <div className="calendar">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
              </div>
            </>
          );
        })}

        <button className="Add" onClick={addEducation}>
          +
        </button>
        <button className="Del" onClick={delEducation}>
          -
        </button>

        <h6>Experience</h6>
        {experienceCount.map(() => {
          return (
            <>
              <div className="Experience">
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="5"
                  placeholder=" Put your experience here"
                ></textarea>
                <div className="calendar">
                  <input type="date" name="" id="" />
                  <input type="date" name="" id="" />
                </div>
              </div>
            </>
          );
        })}

        <button className="Add" onClick={addExperience}>
          +
        </button>
        <button className="Del" onClick={delExperience}>
          -
        </button>
        <h6>Achievements</h6>
        {achievementCount.map(() => {
          return (
            <div className="Achievements">
              <input
                type="text"
                name="achievement"
                id=""
                placeholder="Achievement"
              />
            </div>
          );
        })}

        <button className="Add" onClick={addAchievement}>
          +
        </button>
        <button className="Del" onClick={delAchievement}>
          -
        </button>
        <h6>Projects</h6>
        <div className="projects">
          {projectCount.map((count) => {
            return (
              <>
                <input type="text" name="" placeholder="Project Name" />
                <h6>Description</h6>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Description"
                ></textarea>
              </>
            );
          })}
        </div>
        <button className="Add" onClick={AddProjects}>
          +
        </button>
        <button className="Add" onClick={DelProjects}>
          -
        </button>
      </form>
    </div>
  );
};

export default Form;
