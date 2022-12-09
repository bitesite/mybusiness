import React from "react";
import ReactDOM from "react-dom";
import productManagementImg from "../../assets/images/services_page/product_management.png";
import softwareDevImg from "../../assets/images/services_page/software_dev.png";
import uxUiDesignImg from "../../assets/images/services_page/ux_ui_design.png";
import GeneralPost from "../components/general/general_post";
import CommonProjects from "../components/Services/common_projects";
import CaseStudies from "../components/case_studies";
import ToolsWeUse from "../components/tools_we_use";
import ContactImage from "../../assets/images/contact_image.png";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";

const ServicesPage = () => {
  const header1 = "Product Management";
  const text1 =
    "Product management is all about deciding what to build, and when to build it. We'll help you decide what's important and what's not and priortize the features that will make the most impact in your product.";

  const header2 = "Software Development";
  const text2 =
    "Our developers balance strong software engineering principles with our clients needs to deliver stable, powerful, and viable software. Everything from using modern languages and frameworks, to best practices around source control and deployment, we'll build a solution that suits you perfectly.";

  const header3 = "UX/UI Design";
  const text3 =
    "Our developers balance strong software engineering principles with our clients needs to deliver stable, powerful, and viable software. Everything from using modern languages and frameworks, to best practices around source control and deployment, we'll build a solution that suits you perfectly.";
  return (
    <div className="services-component">
      <div className="heading-regular services-header">
        We work with you to build custom software and web applications.
      </div>
      <div className="services-container dark-background">
        <div className="container gap-160" vertical>
          <GeneralPost
            className="services-post"
            header={header1}
            text={text1}
            image={productManagementImg}
            buttonHide
          />

          <GeneralPost
            className="services-post"
            header={header2}
            text={text2}
            image={softwareDevImg}
            buttonHide
            positionImageRight={false}
          />

          <GeneralPost
            header={header3}
            text={text3}
            image={uxUiDesignImg}
            buttonHide
          />
        </div>
      </div>

      <CommonProjects />
      <CaseStudies />
      <ToolsWeUse />

      <DarkBackgroundGeneralPost
        image={ContactImage}
        header="Who we work with - it could be you!"
        text={
          <>
            When it comes down to it, custom software simply means software that
            was built specifically for you. That covers a huge area and a lot of
            times our customers wonder if their project is suitable for us.
            While we recommend you come in and chat with us to see if your
            project is a fit, we are always excited to work with clients to
            solve their unique problems.
          </>
        }
        link="/contact"
        buttonText="Send us a message"
        buttonType="primary"
        buttonWidth="190px"
        linkHide
      />
    </div>
  );
};

export default ServicesPage;

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("services-page-mount-point");

  if (element) {
    ReactDOM.render(<ServicesPage />, element);
  }
});
