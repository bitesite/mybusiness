import React, { useEffect, useState } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import BradfordImage from '../../assets/images/bradford_case_study.png';
import TartuImage from '../../assets/images/tartu_case_study.png';
import FanSavesImage from '../../assets/images/fansaves_case_study_image.png';
import Link from './link';

const CaseStudies = () => {
  const [onServices, setOnServices] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('services')) {
      setOnServices(true);
    }
  }, []);

  return (
    <div className={`case-studies-page ${onServices ? 'dark-background' : 'light-background'}`}>
      <Frame
        className={`case-studies-component ${onServices ? 'dark-background' : 'light-background'}`}
        gap="30"
        vertical
        alignItems="center"
      >
        <Frame vertical alignItems="center" gap={24}>
          {onServices ? (
            <div className="heading-regular case-studies-title">Project Case Studies</div>
          ) : (
            <div className="heading-regular case-studies-title">More Client Projects</div>
          )}
        </Frame>
        <Frame className="case-study-cards" gap="32" justifyContent="center">
          <Frame className="case-study-item" vertical>
            <img src={BradfordImage} className="case-study-image" alt="bradford case study" />
            <Frame className="case-study-text" vertical gap="8" padding="24">
              <div className="body-small-bold">Bradford Co-Op Online Store</div>
              <div className="body-regular">Moving from a brick-and-mortar store to an online shop.</div>
              <Link className="case-study-link body-small-bold" path="/case_studies/1">
                Read More <Icon icon="fluent:arrow-right-32-filled" />
              </Link>
            </Frame>
          </Frame>

          <Frame className="case-study-item" vertical>
            <img src={TartuImage} className="case-study-image" alt="tartu case study" />
            <Frame className="case-study-text" vertical gap="8" padding="24">
              <div className="body-small-bold">ODC Health Coin Rewards </div>
              <div className="body-regular">Enabling patients to gain rewards while investing in their skin health.</div>
              <Link className="case-study-link body-small-bold" path="/case_studies/2">
                Read More <Icon icon="fluent:arrow-right-32-filled" />
              </Link>
            </Frame>
          </Frame>

          <Frame className="case-study-item" vertical>
            <img src={FanSavesImage} className="case-study-image" alt="iswa case study" />
            <Frame className="case-study-text" vertical gap="8" padding="24">
              <div className="body-small-bold">Fansaves Deal Redemption Portal</div>
              <div className="body-regular">Connecting fans to rewards and enabling community connections to grow.</div>
              <Link className="case-study-link body-small-bold" path="/case_studies/3">
                Read More <Icon icon="fluent:arrow-right-32-filled" />
              </Link>
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
};

export default CaseStudies;
