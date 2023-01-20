import React from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import BradfordImage from '../../assets/images/bradford_case_study.png';
import TartuImage from '../../assets/images/tartu_case_study.png';
import ISWAImage from '../../assets/images/iswa_case_study.png';
import Link from './link';

const CaseStudies = () => (
  <div className="case-studies-page">
    <Frame className="case-studies-component" gap="30" vertical alignItems="center">
      <Frame vertical alignItems="center" gap={24}>
        <div className="heading-regular case-studies-title">Project Case Studies</div>
      </Frame>
      <Frame className="case-study-cards" gap="32" justifyContent="center">
        <Frame className="case-study-item" vertical>
          <img src={BradfordImage} className="case-study-image" alt="bradford case study" />
          <Frame className="case-study-text" vertical gap="8" padding="24">
            <div className="body-small-bold">Bradford Co-Op Online Store</div>
            <div className="body-regular">Moving from a brick-and-mortar store to an online shop.</div>
            <Link className="case-study-link body-small-bold" path="/case_studies/7">
              Read More <Icon icon="fluent:arrow-right-32-filled" />
            </Link>
          </Frame>
        </Frame>

        <Frame className="case-study-item" vertical>
          <img src={TartuImage} className="case-study-image" alt="tartu case study" />
          <Frame className="case-study-text" vertical gap="8" padding="24">
            <div className="body-small-bold">ODC Health Coin Rewards </div>
            <div className="body-regular">A rewards program management system.</div>
            <Link className="case-study-link body-small-bold" path="/case_studies/8">
              Read More <Icon icon="fluent:arrow-right-32-filled" />
            </Link>
          </Frame>
        </Frame>

        <Frame className="case-study-item" vertical>
          <img src={ISWAImage} className="case-study-image" alt="iswa case study" />
          <Frame className="case-study-text" vertical gap="8" padding="24">
            <div className="body-small-bold">International Safety E-Commerce</div>
            <div className="body-regular">Custom E-Commerce to optimize operations and deliver realiability.</div>
            <a className="case-study-link body-small-bold">
              Read More <Icon icon="fluent:arrow-right-32-filled" />
            </a>
          </Frame>
        </Frame>
      </Frame>
      <Frame>
        <a className="case-study-link">
          View All Case Studies <Icon icon="fluent:arrow-right-32-filled" />
        </a>
      </Frame>
    </Frame>
  </div>
);

export default CaseStudies;
