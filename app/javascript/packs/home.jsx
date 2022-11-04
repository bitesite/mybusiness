import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../bitesite-ui';
import GeneralPost from '../components/general/general_post';

// Images
import WireframeCircles from '../../assets/images/Wireframe-Circles.png';
import UserOnPhone from '../../assets/images/user-on-phone.png';
import ProjectsCircleIcons from '../../assets/images/projects-circle-icons.png';
import WomanBrowserIcon from '../../assets/images/woman-browser-icon.png';
import ContactImage from '../../assets/images/contact_image.png';
import UndrawBuildingWebsite from '../../assets/images/undraw_building_website.png';

const Home = () => (
  <div id="component-home">
    <div className="circles-container">
      <img src={WireframeCircles} className="circles" alt="wireframe-circles" />
    </div>

    <div className="hero container">
      <div className="slogan">
        We Build <span className="emphasize">Custom Software</span>
      </div>
      <div className="subslogan">BiteSite is a custom software firm focused on building web and mobile applications.</div>
      <div className="action-container fgs-al fgs-al-g-30 fgs-al-justify-content-center">
        <Button type="primary" href="/contact">
          Work with us
        </Button>
        <Button type="secondary" href="/services">
          Our services
        </Button>
      </div>
    </div>

    <div className="services-projects-beliefs container">
      <GeneralPost
        image={UserOnPhone}
        typeText="SERVICES"
        header="Building software to execute your vision"
        text="Software development is a big field, but we can breakdown what we offer into the following: Product Management, UX/UI Design, Web Development. We adapt our services depending on your project, timeline and budget, always in collaboration."
        link="/services"
        linkText="More about our services"
        buttonHide
      />
      <GeneralPost
        image={ProjectsCircleIcons}
        typeText="COMMON PROJECTS"
        header="Delivering what your business needs"
        text="Whether it be a MVP to kick-start the next great startup, a project to boost productivity, or a marketing website to bring in customers, we're here to help."
        linkHide
        buttonHide
        positionImageRight={false}
      />
      <GeneralPost
        image={WomanBrowserIcon}
        typeText="OUR BELIEFS"
        header="We believe in a good fit"
        text="We embody these values: Honesty, Flexibility and Predictability. We believe it's easier to try things out for a little bit and if things work out, we continue, if they don't we stop. Simple as that."
        linkHide
        buttonHide
      />
    </div>

    <div className="services-projects-beliefs dark-background">
      <div className="container">
        <GeneralPost
          image={UndrawBuildingWebsite}
          header="How we work"
          text="We like process at BiteSite. We integrate our clients into our software development process so we can all  agree on what works well. When it comes to decisions, whether suggestions come from staff or clients, we always take the same approach: small experiments that introduce as little disruption as possible and take as little effort as possible to get off the ground. It's basically the MVP or Minimum Viable Product approach. We approach most (if not all) new ideas as something to try out and see where it goes. This flexible approach is what enables us to get your application up and running quickly, as well as to make improvements whenever needed."
          link="/contact"
          buttonText="More about us"
          buttonType="secondary"
          linkHide
          positionImageRight={false}
        />
      </div>
    </div>
    <div className="clients-container container">Clients we've worked with</div>
    <div className="services-projects-beliefs dark-background">
      <div className="container">
        <GeneralPost
          image={ContactImage}
          header="Get in Touch!"
          text="Know exactly what you want? Have no idea at all? Want to just open up a conversation about your options? Have some technical questions? Whatever it may be, please drop us a line and we'll do our best to answer any questions you may have. BiteSite believes strongly in finding a good fit company for a good fit customer. So if we find out we're not right for you, we won't pressure you. If we do, we'll be happy to build something you'll truly be excited about."
          link="/contact"
          buttonText="Send us a message"
          buttonType="primary"
          linkHide
        />
      </div>
    </div>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('home-mount-point');

  if (element) {
    ReactDOM.render(<Home />, element);
  }
});
