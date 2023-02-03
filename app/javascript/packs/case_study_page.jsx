import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';

import PropTypes from 'prop-types';
import ChallengeLogo from '../../assets/images/case_studies/challenge_logo.png';
import ProcessLogo from '../../assets/images/case_studies/services_logo.png';
import OutcomeLogo from '../../assets/images/case_studies/outcome_logo.png';
import Testimonial from '../components/testimonial';
import CaseStudies from '../components/case_studies';

const CaseStudyPage = ({ id }) => {
  const [caseStudy, setCaseStudy] = useState();
  const [testimonial, setTestimonial] = useState();

  useEffect(() => {
    $.getJSON(`/case_studies/${id}`, (results) => {
      setCaseStudy(results);
      setTestimonial(results.testimonial);
    });
  }, [id]);

  if (caseStudy) {
    return (
      <Frame className="case-study-page" vertical>
        <Frame className="case-study-header-content" justifyContent="center">
          <Frame className="case-study-title-section" vertical gap={32} alignItems="center">
            <img className="logo" src={caseStudy.logo_image} alt="logo" />

            <Frame vertical gap={16} alignItems="center">
              <div className="body-regular light-title">Web design and development</div>
              <div className="heading-regular">{caseStudy.name}</div>
              <div className="body-regular">{caseStudy.subtitle}</div>
              {caseStudy.site_image && <img className="site-image" src={caseStudy.site_image} alt="website" />}
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
        {caseStudy.challenge && (
          <>
            <Frame className="case-study-info-card" gap={32}>
              <Frame vertical gap={25}>
                <img src={ChallengeLogo} className="logo-small" alt="challenge logo" />
                <div className="heading-small">The Challenge</div>
                <div className="body-regular">{caseStudy.challenge}</div>
              </Frame>
              <img className="case-image" src={caseStudy.challenge_image} alt="company challenge" />
            </Frame>
            <Frame className="case-study-info-card" gap={32}>
              <Frame vertical gap={25}>
                <img src={ProcessLogo} className="logo-small" alt="process logo" />
                <div className="heading-small">Our Services/Process</div>
                <div className="body-regular">{caseStudy.process}</div>
              </Frame>
              <img className="case-image" src={caseStudy.process_image} alt="company process" />
            </Frame>
            <Frame className="case-study-info-card" gap={32}>
              <Frame vertical gap={25}>
                <img src={OutcomeLogo} className="logo-small" alt="outcome logo" />
                <div className="heading-small">The Outcome</div>
                <div className="body-regular">{caseStudy.outcome}</div>
              </Frame>
              <img className="case-image" src={caseStudy.outcome_image} alt="company outcome" />
            </Frame>
            <hr />
          </>
        )}
        {testimonial ? (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            body={testimonial.body}
            title={testimonial.title}
            logo={testimonial.logo}
            date={testimonial.created_at}
          />
        ) : (
          <hr className="horizontal-line" />
        )}
        <CaseStudies />
      </Frame>
    );
  }
  return <>Loading</>;
};

export default CaseStudyPage;

CaseStudyPage.propTypes = {
  id: PropTypes.string,
};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('case-study-page-component-mount-point');
  if (element) {
    const { id } = element.dataset;
    ReactDOM.render(<CaseStudyPage id={id} />, element);
  }
});
