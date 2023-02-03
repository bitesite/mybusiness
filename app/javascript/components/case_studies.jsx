import React, { useEffect, useState } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';

import Link from './link';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState();
  const [numberOfCaseStudies, setNumbeOfCaseStudies] = useState(3);
  function loadCaseStudies() {
    $.getJSON(`/case_studies/`, (results) => {
      setCaseStudies(results);
    });
  }
  useEffect(() => {
    loadCaseStudies();
  }, []);

  return (
    <div className="case-studies-page">
      <Frame className="case-studies-component" gap="30" vertical alignItems="center">
        <Frame vertical alignItems="center" gap={24}>
          <div className="heading-regular case-studies-title">Project Case Studies</div>
        </Frame>
        <Frame className="case-study-cards" gap="32" justifyContent="center">
          {caseStudies &&
            caseStudies.slice(0, numberOfCaseStudies).map((caseStudy) => (
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
        <Frame>
          <Link className="case-study-link" path="/case_studies">
            View All Case Studies <Icon icon="fluent:arrow-right-32-filled" />
          </Link>
        </Frame>
      </Frame>
    </div>
  );
};

export default CaseStudies;
