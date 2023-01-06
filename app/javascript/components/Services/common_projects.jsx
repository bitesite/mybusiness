import React from "react";
import PropTypes from "prop-types";
import MobileAppImage from "../../../assets/images/mobile_app_vector.png";
import WebAppImage from "../../../assets/images/web_apps_vector.png";
import MarketingImage from "../../../assets/images/marketing_vector.png";

const CommonProjects = ({ isMobileWidth }) => (
  <div className="common-projects-card fgs-al fgs-al-v fgs-al-g-30 container">
    <div className="common-projects-title heading-regular">Common Projects</div>
    <div
      className={`common-projects-content fgs-ali fgs-al fgs-al-h fgs-al-g-30 fgs-al-align-items-flex-start ${
        isMobileWidth ? "" : "fgs-al-p-10"
      }`}
    >
      <div
        className={`common-projects-item fgs-ali fgs-al fgs-al-v fgs-al-g-30  fgs-al-align-items-flex-start ${
          isMobileWidth ? "" : "fgs-al-p-10"
        }`}
      >
        <img
          src={WebAppImage}
          className="common-projects-image"
          alt="common projects web applications"
        />

        <div className="common-projects-item-title heading-small">Web Apps</div>
        <div className="common-projects-item-content body-regular">
          Our specialty is full-stack web applications. So whether you're trying
          to build the next AirBnb or Twitter, or you're looking to improve your
          business with productivity tools, we can build a web application that
          starts as an MVP and scales with your success.
        </div>
      </div>
      <div className="common-projects-item fgs-al fgs-al-v fgs-al-g-30  fgs-al-align-items-flex-start fgs-al-p-10">
        <img
          src={MobileAppImage}
          className="common-projects-image"
          alt="common projects mobile applications"
        />
        <div className="common-projects-item-title heading-small">
          Mobile Apps
        </div>
        <div className="common-projects-item-content body-regular">
          Mobile has become such an important platform and providing your users
          with a mobile option can mean the difference between your idea being a
          success or not. We use Expo and React-Native to allow for efficient
          development of iOS and Android Apps with rich user experiences.
        </div>
      </div>
      <div className="common-projects-item fgs-al fgs-al-v fgs-al-g-30  fgs-al-align-items-flex-start fgs-al-p-10">
        <img
          src={MarketingImage}
          className="common-projects-image"
          alt="common projects marketing applications"
        />

        <div className="common-projects-item-title heading-small">
          Marketing Websites
        </div>

        <div className="common-projects-item-content body-regular">
          A lot of our biggest web applications start out as marketing websites.
          If you need a simple online presence to promote your business that can
          grow with you, we're the right shop for you.
        </div>
      </div>
    </div>
  </div>
);

CommonProjects.propTypes = {
  isMobileWidth: PropTypes.bool,
};

export default CommonProjects;
