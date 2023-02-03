import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Frame } from '@bitesite/react-figstrap';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Link from '../components/link';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState();
  function loadCaseStudies() {
    $.getJSON(`/case_studies`, (results) => {
      setCaseStudies(results);
    });
  }
  useEffect(() => {
    loadCaseStudies();
  }, []);

  return (
    <Frame vertical className="case-studies" justifyContent="center" alignItems="center" gap={64} padding={120}>
      <Frame vertical alignItems="center" className="case-studies-header" gap={32}>
        <div className="heading-large"> Client Projects</div>
        <div className="body-regular">
          Here are some of the client projects we’ve worked on over the years. Our experience ranges from one-page designs to
          full-stack web and mobile applications.
        </div>
      </Frame>
      <Frame className="case-study-cards" gap={32} justifyContent="center">
        {caseStudies &&
          caseStudies.map((caseStudy) => (
            <Frame className="case-study-item" vertical>
              <img src={caseStudy.card_image} className="case-study-image" alt="bradford case study" />
              <Frame className="case-study-text" vertical gap="8" padding="24">
                <div className="body-small-bold">{caseStudy.name}</div>
                <div className="body-regular">{caseStudy.subtitle}</div>
                {caseStudy.link && (
                  <Link className="case-study-link body-small-bold" path={`/case_studies/${caseStudy.id}`}>
                    Read More <Icon icon="fluent:arrow-right-32-filled" />
                  </Link>
                )}
              </Frame>
            </Frame>
          ))}
      </Frame>
    </Frame>
  );
};
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('case-study-index-component-mount-point');
  if (element) {
    ReactDOM.render(<CaseStudies />, element);
  }
});
