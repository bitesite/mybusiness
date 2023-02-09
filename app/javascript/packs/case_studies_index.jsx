import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Frame } from '@bitesite/react-figstrap';
import CaseStudyCard from '../components/case_study/case_study_card';

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
            <CaseStudyCard
              image={caseStudy.card_image}
              name={caseStudy.name}
              subtitle={caseStudy.subtitle}
              link={caseStudy.link}
              id={caseStudy.link}
            />
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
