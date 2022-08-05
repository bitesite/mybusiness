import React from 'react';
import ReactDOM from 'react-dom';
import AboutHeader from '../components/About/about_header';
import OurProcess from '../components/About/our_process';
import OurTeam from '../components/About/our_team';
import LearnMoreAboutUs from '../components/About/learn_more_about_us';

const AboutPage = ({ teamMembers }) => (
  <div className="about-page fgs-al  fgs-al-v frs-al-g-10">
    <AboutHeader />
    <OurProcess />
    <OurTeam teamMembers={teamMembers} />
    <LearnMoreAboutUs />
  </div>
);

export default AboutPage;

AboutPage.propTypes = {};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('about-page-component-mount-point');
  if (element) {
    const { teamMembers } = element.dataset;
    ReactDOM.render(<AboutPage teamMembers={JSON.parse(teamMembers)} />, element);
  }
});
