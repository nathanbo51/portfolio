import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  const language = localStorage.getItem("language");
  return (
    <div className="experience-main">
      <Header
        theme={props.theme}
        setTheme={props.setTheme}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {language === "fr" ? experience.titleFr : experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {language === "fr"
                  ? experience.subtitleFr
                  : experience.subtitle}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {language === "fr"
                  ? experience.descriptionFr
                  : experience.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
