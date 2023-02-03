import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Frame } from '@bitesite/react-figstrap';
import moment from 'moment';
import { Button } from '../bitesite-ui';
import GeneralPost from '../components/general/general_post';
import ReferralCard from '../components/Clients/referral_card';

// Images
import WireframeCircles from '../../assets/images/Wireframe-Circles.png';
import UserOnPhone from '../../assets/images/user-on-phone.png';
import ProjectsCircleIcons from '../../assets/images/projects-circle-icons.png';
import WomanBrowserIcon from '../../assets/images/woman-browser-icon.png';
import ContactImage from '../../assets/images/contact_image.png';
import UndrawBuildingWebsite from '../../assets/images/undraw_building_website.png';

import AboveTheLineLogo from '../../assets/images/aboveTheLineLogo.jpeg';
import BradfordCoopLogo from '../../assets/images/bradfordCoopLogo.jpeg';
import FansavesLogo from '../../assets/images/fansavesLogo.jpeg';
import FnpcLogo from '../../assets/images/fnpcLogo.jpeg';
import GmfrcLogo from '../../assets/images/gmfrcLogo.jpeg';
import InspecHomesLogo from '../../assets/images/inspecHomesLogo.jpeg';
import InternationalSafetyLogo from '../../assets/images/internationalSafetyLogo.jpeg';
import OdoughsLogo from '../../assets/images/odoughsLogo.jpeg';
import DarkBackgroundGeneralPost from '../components/general/dark_background_general_post';

const Home = ({ testimonialIds }) => {
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = () => {
    $.getJSON(`/testimonials`,{filters: {
      id: testimonialIds
    }}, (data) => {
      const sortedData = data.sort((a, b) => {
        return testimonialIds.indexOf(`${a.id}`) - testimonialIds.indexOf(`${b.id}`);
      });
      console.log(data)
      setTestimonials(sortedData);
    });
  };

  useEffect(loadTestimonials, []);

  return (
    <Frame id="component-home" className="fgs-al" vertical>
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

      <div className="fgs-al fgs-al-v services-projects-beliefs container">
        <GeneralPost
          image={UserOnPhone}
          typeText="SERVICES"
          header="Building software to execute your vision"
          text="Software development is a big field, but we can breakdown what we offer into the following: Product Management, UX/UI Design, Web Development. We adapt our services depending on your project, timeline and budget, always in collaboration."
          link="/services"
          linkText={
            <>
              More about our services
              <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                  fill="#394243"
                />
              </svg>
            </>
          }
          buttonHide
          contentClass="home-general-content"
        />
        <GeneralPost
          image={ProjectsCircleIcons}
          typeText="COMMON PROJECTS"
          header="Delivering what your business needs"
          text="Whether it be a MVP to kick-start the next great startup, a project to boost productivity, or a marketing website to bring in customers, we're here to help."
          linkHide
          buttonHide
          positionImageRight={false}
          contentClass="home-general-content"
        />
        <GeneralPost
          image={WomanBrowserIcon}
          typeText="OUR BELIEFS"
          header="We believe in a good fit"
          text="We embody these values: Honesty, Flexibility and Predictability. We believe it's easier to try things out for a little bit and if things work out, we continue, if they don't we stop. Simple as that."
          linkHide
          buttonHide
          contentClass="home-general-content"
        />
      </div>

      <DarkBackgroundGeneralPost
        image={UndrawBuildingWebsite}
        header="How we work"
        text={
          <>
            We like process at BiteSite. We integrate our clients into our software development process so we can all agree on
            what works well. When it comes to decisions, whether suggestions come from staff or clients, we always take the same
            approach: small experiments that introduce as little disruption as possible and take as little effort as possible to
            get off the ground. It's basically the MVP or Minimum Viable Product approach.
            <br />
            <br />
            We approach most (if not all) new ideas as something to try out and see where it goes. This flexible approach is what
            enables us to get your application up and running quickly, as well as to make improvements whenever needed.
          </>
        }
        link="/about"
        buttonText="More about us"
        buttonType="secondary"
        buttonWidth="150px"
        linkHide
        positionImageRight={false}
      />

      <div className="clients-container container fgs-al fgs-al-v fgs-al-justify-content-center fgs-al-align-items-center fgs-al-g-60">
        <div className="heading-regular">Clients we've worked with</div>
        <div className="fgs-al fgs-al-justify-content-center logos-container">
          <img className="logo-image" src={InternationalSafetyLogo} alt="InternationalSafety Logo" />
          <img className="logo-image" src={FansavesLogo} alt="Fansaves Logo" />
          <img className="logo-image" src={FnpcLogo} alt="Fnpc Logo" />
          <img className="logo-image" src={InspecHomesLogo} alt="InspecHomes Logo" />
          <img className="logo-image" src={OdoughsLogo} alt="Odoughs Logo" />
          <img className="logo-image" src={GmfrcLogo} alt="Gmfrc Logo" />
          <img className="logo-image" src={AboveTheLineLogo} alt="AboveTheLine Logo" />
          <img className="logo-image" src={BradfordCoopLogo} alt="BradfordCoop Logo" />
        </div>
        <div className="fgs-al fgs-al-justify-content-center referral-container fgs-al-g-30 ">
          {testimonials.map((testimonial) => (
            <ReferralCard
              header={testimonial.quote}
              text={testimonial.referral_card_text}
              userImage={testimonial.logo}
              userName={`${testimonial.name}, ${testimonial.title}`}
              date={moment(testimonial.date).format('MMM DD, YYYY')}
            />
          ))}
        </div>
        {/* <div className="fgs-al fgs-al-justify-content-center">
        <Link href="/contact" className="view-case-studies-link">
        View Case Studies
        <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M33.2071 8.70711C33.5976 8.31658 33.5976 7.68342 33.2071 7.29289L26.8431 0.928932C26.4526 0.538408 25.8195 0.538408 25.4289 0.928932C25.0384 1.31946 25.0384 1.95262 25.4289 2.34315L31.0858 8L25.4289 13.6569C25.0384 14.0474 25.0384 14.6805 25.4289 15.0711C25.8195 15.4616 26.4526 15.4616 26.8431 15.0711L33.2071 8.70711ZM0.5 9H32.5V7H0.5V9Z"
        fill="#394243"
        />
        </svg>
        </Link>
      </div> */}
      </div>
      <DarkBackgroundGeneralPost
        image={ContactImage}
        header="Get in Touch!"
        text={
          <>
            Know exactly what you want? Have no idea at all? Want to just open up a conversation about your options? Have some
            technical questions? Whatever it may be, please drop us a line and we&apos;ll do our best to answer any questions you
            may have.
            <br />
            <br />
            BiteSite believes strongly in finding a good fit company for a good fit customer. So if we find out we&apos;re not
            right for you, we won&apos;t pressure you. If we do, we&apos;ll be happy to build something you&apos;ll truly be
            excited about.
          </>
        }
        link="/contact"
        buttonText="Send us a message"
        buttonType="primary"
        buttonWidth="190px"
      />
    </Frame>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('home-mount-point');

  if (element) {
    const { testimonials } = element.dataset;
    console.log(testimonials)
    ReactDOM.render(<Home testimonialIds={JSON.parse(testimonials)} />, element);
  }
});
