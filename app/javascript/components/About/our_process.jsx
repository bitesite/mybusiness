import React from "react";
import PropTypes from "prop-types";
import ProcessStepProgress from "./process_step_progress";

const OurProcess = ({ isMobileWidth }) => {
  const steps = [
    {
      title: "Getting to know you and your project",
      description:
        "We like to welcome all types of people with diverse backgrounds when it comes to our staff, our clients, and anybody else we work with. Everybody has their own working style that we respect, but before embarking on a new project together, we like to make sure that we’ll be a good fit for each other so that you can take the best approach for your project.",
    },
    {
      title: "MVP Sprint Planning",
      description:
        "While all our contracts are setup to be open-ended, for first time clients, we usually like to define a set of some concrete short-term goals. Typically, these projects are setup to be about 1-3 months and have a short list of features. These projects can often be viewed as a Minimal Viable Product (MVP). A general timeline and checkin meetings are setup.",
    },
    {
      title: "Design & Development",
      description:
        "Our typical design and development cycles center around fixed, predictable chunks of time (usually 1 week) called Sprints. Every Sprint starts with a planning session where the entire team decides what is going to be designed, developed, tested and delivered. We manage our Sprints using Trello cards, that our clients are able to view the progress of and add feedback to.",
    },
    {
      title: "Test & Iterate",
      description:
        "As Product Managers start to test a new feature, there are two outcomes. Either the feature will be acceptable and will be approved, or the feature will need some tweaks. If the feature needs tweaks, the product managers will send it back to be fixed. This cycle continues until everything gets approved.",
    },
  ];

  return (
    <div className="component-our-process">
      <div
        className={`container fgs-al fgs-al-v fgs-al-align-items-flex-center fgs-al-justify-content-flex-center ${
          isMobileWidth ? "fgs-al-g-40" : "fgs-al-g-60"
        }`}
      >
        <div className="our-process-title heading-regular ">Our Process </div>
        <div className="our-process-content body-large ">
          We believe that all good software begins with a good process. Whether
          you have small updates to make, a short project, or on-going needs, we
          follow a process that maximizes the effectiveness of your software.
        </div>
        <div className="our-process-steps fgs-al fgs-al-v fgs-al-g-40 fgs-al-align-items-flex-start fgs-al-justify-content-flex-start">
          {!isMobileWidth ? (
            <ProcessStepProgress steps={steps} />
          ) : (
            steps.map(({ title, description }, index) => (
              <div className="our-process-step-item fgs-al fgs-al-v fgs-al-g-20 fgs-al-justify-content-flex-start">
                <div className="our-process-step-item-title fgs-al fgs-al-h fgs-al-g-10 fgs-al-align-items-flex-center heading-small">
                  <div className="our-process-step-item-number">
                    {index + 1}
                  </div>
                  <div className="our-process-step-item-title-name">
                    {title}
                  </div>
                </div>
                <div className="our-process-step-item-description body-regular">
                  {description}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default OurProcess;

OurProcess.propTypes = {
  isMobileWidth: PropTypes.bool,
};
