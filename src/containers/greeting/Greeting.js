import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, greetingFr } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const language = localStorage.getItem("language");
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {language === "fr" ? greetingFr.title : greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>{language === "fr" ? "Je suis " : "I'm "}</span>
                <span style={{ color: theme.accentColor }}>
                  {language === "fr"
                    ? greetingFr.full_name
                    : greeting.full_name}
                  .{" "}
                </span>
                {language === "fr" ? greetingFr.subTitle : greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  {language === "fr" ? "Me Contacter" : "Contact Me"}
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
