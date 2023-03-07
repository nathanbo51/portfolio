import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  const language = localStorage.getItem("language");
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            {language === "fr"
              ? "Cours en Ligne et Certifications"
              : "Online Courses and Certifications"}
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Certifications;
