import React from "react";
import "./LeftPane.css";
import Form from "./Form";

const LeftPane = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="border rounded border-warning col-md-4 "
      style={{ maxHeight: "95vh", overflowY: "scroll", width: "40%" }}
    >
      <Form />
    </div>
  );
  // return (
  //   <div
  //     className="border rounded border-warning col-md-4 "
  //     style={{ maxHeight: "95vh", overflowY: "scroll", width: "100%" }}
  //   >
  //     <form onSubmit={handleSubmit}>
  //       <div className="upperSection">
  //         <h3 id="load">Load Data</h3>
  //         <button className="button">🔃</button>
  //         <h3 id="save">Save Data</h3>
  //         <button className="button">📥</button>
  //       </div>
  //       <div className="PI">
  //         <h6>Personal Information</h6>
  //         <br />
  //         <input type="text" className="input" placeholder="Name" />
  //         <input
  //           type="text"
  //           className="input"
  //           name=""
  //           placeholder="Profession"
  //         />
  //         <input
  //           type="number"
  //           className="input"
  //           name=""
  //           placeholder="Contact"
  //         />
  //         <input type="email" className="input" name="" placeholder="email" />
  //         <input type="text" className="input" name="" placeholder="Address" />
  //       </div>
  //       <div className="SM">
  //         <h6>Social Media</h6>
  //         <br />
  //         {socialMediaCount.map((count) => {
  //           return (
  //             <>
  //               <input
  //                 type="text"
  //                 name={`socialmedia_${count}`}
  //                 placeholder="Social Media"
  //               />
  //             </>
  //           );
  //         })}
  //       </div>
  //       <button className="Add" onClick={AddSocialMedia}>
  //         +
  //       </button>
  //       <button className="Del" onClick={DeleteSocialMedia}>
  //         -
  //       </button>
  //       <h6>Summary</h6>
  //       <div className="summary">
  //         <textarea name="" id="" cols="50" rows="8"></textarea>
  //       </div>
  //       <h6>Education</h6>

  //       {educationCount.map(() => {
  //         return (
  //           <>
  //             <div className="Education">
  //               <input type="text" name="" id="" placeholder="Education" />
  //             </div>
  //             <div className="calendar">
  //               <input type="date" name="" id="" />
  //               <input type="date" name="" id="" />
  //             </div>
  //           </>
  //         );
  //       })}

  //       <button className="Add" onClick={addEducation}>
  //         +
  //       </button>
  //       <button className="Del" onClick={delEducation}>
  //         -
  //       </button>

  //       <h6>Experience</h6>
  //       {experienceCount.map(() => {
  //         return (
  //           <>
  //             <div className="Experience">
  //               <textarea
  //                 name=""
  //                 id=""
  //                 cols="50"
  //                 rows="5"
  //                 placeholder=" Put your experience here"
  //               ></textarea>
  //               <div className="calendar">
  //                 <input type="date" name="" id="" />
  //                 <input type="date" name="" id="" />
  //               </div>
  //             </div>
  //           </>
  //         );
  //       })}

  //       <button className="Add" onClick={addExperience}>
  //         +
  //       </button>
  //       <button className="Del" onClick={delExperience}>
  //         -
  //       </button>
  //       <h6>Achievements</h6>
  //       {achievementCount.map(() => {
  //         return (
  //           <div className="Achievements">
  //             <input
  //               type="text"
  //               name="achievement"
  //               id=""
  //               placeholder="Achievement"
  //             />
  //           </div>
  //         );
  //       })}

  //       <button className="Add" onClick={addAchievement}>
  //         +
  //       </button>
  //       <button className="Del" onClick={delAchievement}>
  //         -
  //       </button>
  //       <h6>Projects</h6>
  //       <div className="projects">
  //         {projectCount.map((count) => {
  //           return (
  //             <>
  //               <input type="text" name="" placeholder="Project Name" />
  //               <h6>Description</h6>
  //               <textarea
  //                 name=""
  //                 id=""
  //                 cols="30"
  //                 rows="5"
  //                 placeholder="Description"
  //               ></textarea>
  //             </>
  //           );
  //         })}
  //       </div>
  //       <button className="Add" onClick={AddProjects}>
  //         +
  //       </button>
  //       <button className="Add" onClick={DelProjects}>
  //         -
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default LeftPane;
