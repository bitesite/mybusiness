import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';

import ChallengeLogo from '../../assets/images/case_studies/challenge_logo.png';
import ProcessLogo from '../../assets/images/case_studies/services_logo.png';
import OutcomeLogo from '../../assets/images/case_studies/outcome_logo.png';
import Link from '../components/link';

const CaseStudyPage = ({ id }) => {
  const [caseStudy, setCaseStudy] = useState();

  useEffect(() => {
    $.getJSON(`/case_studies/${id}`, (results) => {
      setCaseStudy(results);
    });
  }, [id]);

  if (caseStudy) {
    return (
      <Frame className="case-study-page" vertical>
        <Frame className="case-study-header-content" justifyContent="center">
          <Frame className="case-study-title-section" vertical gap={32} alignItems="center">
            <img className="logo" src={caseStudy.logo} />

            <Frame vertical gap={16}>
              <div className="body-regular light-title">Web design and development</div>
              <div className="heading-regular">{caseStudy.name}</div>
              <div className="body-regular">{caseStudy.subtitle}</div>
              <img className="site-image" src={caseStudy.site_image} />
              <a
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                className="case-study-link body-small-bold  site-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(caseStudy.link, '_blank');
                }}
              >
                View live site <Icon icon="fluent:arrow-right-32-filled" />
              </a>
            </Frame>
          </Frame>
        </Frame>
        <Frame className="case-study-info-card" gap={32}>
          <Frame vertical gap={25}>
            <img src={ChallengeLogo} className="logo-small" />
            <div className="heading-small">The Challenge</div>
            <div>{caseStudy.challenge}</div>
          </Frame>
          <img className="case-image" src={caseStudy.challenge_image} />
        </Frame>
        <Frame className="case-study-info-card" gap={32}>
          <Frame vertical gap={25}>
            <img src={ProcessLogo} className="logo-small" />
            <div className="heading-small">Our Services/Process</div>
            <div>{caseStudy.process}</div>
          </Frame>
          <img className="case-image" src={caseStudy.process_image} />
        </Frame>
        <Frame className="case-study-info-card" gap={32}>
          <Frame vertical gap={25}>
            <img src={OutcomeLogo} className="logo-small" />
            <div className="heading-small">The Outcome</div>
            <div>{caseStudy.process}</div>
          </Frame>
          <img className="case-image" src={caseStudy.outcome_image} />
        </Frame>
      </Frame>
    );
  }
  return <>Loading</>;
};

export default CaseStudyPage;

CaseStudyPage.propTypes = {};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('case-study-page-component-mount-point');
  if (element) {
    const { id } = element.dataset;
    ReactDOM.render(<CaseStudyPage id={id} />, element);
  }
});
