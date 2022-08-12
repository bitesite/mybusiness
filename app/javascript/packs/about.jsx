import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AboutHeader from '../components/About/about_header';
import OurProcess from '../components/About/our_process';
import OurTeam from '../components/About/our_team';
import LearnMoreAboutUs from '../components/About/learn_more_about_us';
import { isMobileScreenSize } from '../src/utilities/general_helpers';

const AboutPage = ({ teamMembers }) => {
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(760));


  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(760));
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isMobileWidth]);

  return (
  <div className="about-page fgs-al  fgs-al-v frs-al-g-10">
    <AboutHeader isMobileWidth={isMobileWidth}/>
    <OurProcess isMobileWidth={isMobileWidth}/>
    <OurTeam teamMembers={teamMembers} isMobileWidth={isMobileWidth}/>
    <LearnMoreAboutUs isMobileWidth={isMobileWidth}/>
  </div>
);
  }

export default AboutPage;

AboutPage.propTypes = {};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('about-page-component-mount-point');
  if (element) {
    const { teamMembers } = element.dataset;
    ReactDOM.render(<AboutPage teamMembers={JSON.parse(teamMembers)} />, element);
  }
});
