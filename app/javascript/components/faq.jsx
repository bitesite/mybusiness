import React, { useState } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import Accordian from './general/accordian';

const Faq = () => {
  const [expandAll, setExpandAll] = useState(false);
  const [buttonText, setButtonText] = useState('Expand All');

  const changeButtonText = () => {
    if (buttonText === 'Expand All') {
      setButtonText('Collapse All');
    }
    if (buttonText === 'Collapse All') {
      setButtonText('Expand All');
    }
  };
  return (
    <Frame vertical className="faq-section" gap="30" padding="64">
      <Frame justifyContent="space-between">
        <Frame className="faq-heading heading-regular">Frequently Asked Questions</Frame>
        <button
          className="btn secondary-default"
          onClick={(e) => {
            e.preventDefault;
            setExpandAll(!expandAll);
            changeButtonText();
          }}
        >
          {buttonText}
        </button>
      </Frame>
      <Accordian
        expandAll={expandAll}
        accordianTitle="How do you charge and how much do you charge?"
        accordianContent="We are a time-based billing company which basically means we charge you per hour that we work on your project. Although this changes from time to time, our current rate is $150.00/hour + applicable taxes. We typically work on your project and send you a bill at the end of the month."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="I don't have a lot of budget, will you take my project on?"
        accordianContent="While there are a lot of factors that determine whether we will take a project on or not, low budget projects are not typically something we shy away from. Yes we do recommend having a good starting budget, but that being said we charge per hour and we will try to make something work with the budget you have. Come tallk to us - don't worry, you won't offend us. We've taking on projects as low as $500.00 to as high as hundreds of thousands of dollars."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="I know you charge per hour, but how much does it cost to develop a web application or a mobile application?"
        accordianContent="It's a great question. As mentioned projects vary in cost by quite a bit depending on a lot of factors. For new projects, we like to start small with a minimum viable product - a simple, small version of what you're envisioning and build up from there incrementally. So how much would an MVP cost? Well that also depends on a lot of factors but for web applications, we say $5,000.00 to $10,000.00 is a good starting budget and for mobile applications, $10,000.00 to $15,000.00 is a good starting budget. Scared you don't have that much money? Not a problem, come and talk to us anyway. You might be surprised how far your money will go."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="Do you do Mobile Application Development? What about Web Design and Development?"
        accordianContent="Yes we do! We call ourselves a Custom Software company because our skills span across multiple platforms. We can develop desktop applications, mobile applications, and web applications."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="How concrete should my project be when I come and talk to BiteSite?"
        accordianContent="To be honest, it doesn't really matter. As long as you know that you have a problem that you want to solve and you think software might be a good route to solve it, come and talk to us. We'll help you decide before you sign anything whether we'd be a good fit and what the solution could look like. A lot of the times we'll even recommend better solutions than working with us."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="Do you only take customers in Ottawa, Canada?"
        accordianContent="No. In fact some of our biggest customers are not in the Ottawa area. The type of software that we build is very conducive to working remotely."
      />
      <Accordian
        expandAll={expandAll}
        accordianTitle="How often do I have to meet with BiteSite during my project?"
        accordianContent="This is something we determine based on the project. Our biggest clients typically have a standing meeting once every week. Our smaller clients typically meet with us on a on-demand basis."
      />
    </Frame>
  );
};

export default Faq;
