import React, { useEffect, useState } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import Link from './link';
import CaseStudyCard from './case_study/case_study_card';

const CaseStudies = ({caseStudyPage}) => {
  const [caseStudies, setCaseStudies] = useState();
  const [numberOfCaseStudies, setNumbeOfCaseStudies] = useState(3);
  const [onCaseStudyPage, setOnCaseStudyPage] = useState(false);

  function loadCaseStudies() {
    $.getJSON(`/case_studies/`, (results) => {
      setCaseStudies(results);
    });
  }
  useEffect(() => {
    loadCaseStudies();
  }, []);

  useEffect(() => {
    if (caseStudyPage) {
      setOnCaseStudyPage(true);
    }
  }, []);

  return (
    <div className={`case-studies-page ${onCaseStudyPage ? 'light-background' : 'dark-background'}`}>
      <Frame         className={`case-studies-component ${onCaseStudyPage ? 'light-background' : 'dark-background'}`}
        gap="30"
        vertical
        alignItems="center">
        <Frame vertical alignItems="center" gap={24}>
          {!onCaseStudyPage ? (
            <div className="heading-regular case-studies-title">Project Case Studies</div>
          ) : (
            <div className="heading-regular case-studies-title">More Client Projects</div>
          )}
        </Frame>
        <Frame className="case-study-cards" gap="32" justifyContent="center">
          {caseStudies &&
            caseStudies.slice(0, numberOfCaseStudies).map((caseStudy) => (
              <CaseStudyCard image={caseStudy.card_image} name={caseStudy.name} subtitle={caseStudy.subtitle} link={caseStudy.link} id={caseStudy.id}/> 
            ))}
        </Frame>
        <Frame>
          {!onCaseStudyPage ? (          
          <Link className="case-study-link" path="case_studies">
            View All Case Studies <Icon icon="fluent:arrow-right-32-filled" />
          </Link> 
          ): ( 
          <Link className="case-study-link" path="/case_studies">
           <Icon icon="fluent:arrow-left-32-filled" /> Back to All Case Studies 
          </Link>
          )}
        </Frame>
      </Frame>
    </div>
  );
};

export default CaseStudies;
