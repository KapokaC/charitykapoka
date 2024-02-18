import React from "react";
import { skills } from "../../data/constant";
import "./styles.css";

const Skills = () => {
  return (
    <div className="theContainer" id="skills">
      <div className="theWrapper">
        <h1 className="title">Skills</h1>
        <p className="decs">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="skillsContainer">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h2
                className="skillTittle"
                style={{
                  textAlign: "center",
                  color: "#b1b2b3",
                }}
              >
                {skill.title}
              </h2>
              <div className="skillList">
                {skill.skills.map((item, subIndex) => (
                  <div className="skillItem" key={subIndex}>
                    <img
                      className="skillImage"
                      src={item.image}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
