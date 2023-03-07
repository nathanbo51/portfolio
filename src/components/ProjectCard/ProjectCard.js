import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });
  const language = localStorage.getItem("language");

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p
              className="repo-name"
              style={{ color: theme.text, marginBottom: "20px" }}
            >
              {language === "fr" ? repo.nameFr : repo.name}
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              className="logo_img"
              src={require(`../../assests/images/${repo.img}`)}
              alt={repo.alt_name}
            />
          </div>
          <p
            className="repo-description"
            style={{ color: theme.text, marginTop: "15px" }}
          >
            {language === "fr" ? repo.descriptionFr : repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
