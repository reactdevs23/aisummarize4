import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ images, mainDiv, features, advisor }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.imagesContainer}>
          {images.map((el, i) => (
            <div
              className={[
                classes.element,
                // i + 1 === 1 && classes.firstElement,
                // i + 1 === images.length && classes.lastElement,
                (i + 1) % 2 !== 0 && classes.oddElement,
                (i + 1) % 2 === 0 &&
                  (i + 1) % 4 !== 0 &&
                  classes.divisibleBy2Not4,
                (i + 1) % 2 === 0 && (i + 1) % 4 === 0 && classes.evenElement,
                i + 1 === 2 && classes.secondElement,
                i === images.length - 2 && classes.secondLastElement,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={classes.container}>
                <div
                  className={classes.imgContianer}
                  style={{
                    "--bg": el.containerBg && el.containerBg,
                    height: !el.containerBg && "auto",
                  }}
                >
                  <div className={classes.img}>{el.icon}</div>
                </div>
                <p className={classes.line}></p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={classes.mainDiv}
          style={{ "--bg": mainDiv.bg, "--headingColor": mainDiv.headingColor }}
        >
          <h3 className={classes.heading}>{mainDiv.heading}</h3>
        </div>
        <div className={classes.features}>
          {features.map((feature, i) => (
            <div
              className={classes.feature}
              key={i}
              style={{
                "--bg": feature.bg,
                "--titleColor": feature.titleColor,
                "--border": feature.border,
              }}
            >
              <div className={classes.featureIcon}>{feature.icon}</div>
              <p
                className={classes.featureTitle}
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></p>
            </div>
          ))}
        </div>
        <div
          className={classes.advisor}
          style={{ "--bg": advisor.bg, "--titleColor": advisor.titleColor }}
        >
          <div className={classes.advisorIcon}>{advisor.icon}</div>
          <p className={classes.advisorTitle}>{advisor.title}</p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
