import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../../bitesite-ui";
import { isMobileScreenSize } from "../../src/utilities/general_helpers";
import { Frame } from "@bitesite/react-figstrap";

const GeneralPost = ({
  image,
  typeText,
  header,
  text,
  buttonText,
  link,
  linkHide,
  linkText,
  positionImageRight,
  buttonHide,
  buttonClass,
  buttonType,
  buttonWidth,
  onClick,
  imageStyle,
  contentClass,
  className,
  alignPostClass,
}) => {
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(780));
  function resize() {
    if (isMobileScreenSize(780) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(780));
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobileWidth]);

  return (
    <div
      className={`general-component-card fgs-al fgs-al-v fgs-al-g-30 ${className}`}
    >
      <div
        className={`content-block fgs-al fgs-ali fgs-al-h fgs-al-g-60 ${alignPostClass} fgs-al-justify-content-space-between ${
          isMobileWidth ? "mobile-wrap" : ""
        }`}
      >
        <Frame
          className={`fgs-al fgs-al-align-items-center ${
            positionImageRight ? "right" : ""
          } ${
            isMobileWidth ? "mobile-image-block" : "image-block"
          } ${imageStyle}`}
        >
          <img className="card-image" src={image} alt="general component" />
        </Frame>

        <div
          className={`${
            isMobileWidth ? "mobile-content" : "content"
          } fgs-al fgs-ali fgs-al-v fgs-al-g-30 mobile ${contentClass}`}
        >
          {typeText && <div className="type-text fgs-ali">{typeText}</div>}
          <div className="title fgs-ali heading-regular fgs-al-g-16">
            {header}
          </div>
          <div className="body-large">{text}</div>
          {!buttonHide && (
            <div>
              <Button
                className={`${buttonClass}`}
                type={buttonType}
                onClick={onClick}
                href={link}
                width={buttonWidth}
              >
                {buttonText}
              </Button>
            </div>
          )}
          {!linkHide && (
            <a className="link" href={link}>
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

GeneralPost.defaultProps = {
  image: "",
  header: "",
  text: <></>,
  buttonText: "",
  link: "",
  positionImageRight: true,
  buttonHide: false,
  onClick: () => {},
  linkHide: false,
  linkText: <></>,
  buttonType: "primary",
  buttonClass: "",
  alignPostClass: "fgs-al-align-items-center",
};

GeneralPost.propTypes = {
  image: PropTypes.string,
  typeText: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.node,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  positionImageRight: PropTypes.bool,
  buttonHide: PropTypes.bool,
  buttonClass: PropTypes.string,
  onClick: () => {},
  linkHide: PropTypes.bool,
  linkText: PropTypes.node,
  buttonType: PropTypes.string,
  contentClass: PropTypes.string,
  alignPostClass: PropTypes.string,
};

export default GeneralPost;
