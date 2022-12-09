import React, { useState, useEffect } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import Accordian from './general/accordian';
import FaqForm from './faq_form';

const Faq = () => {
  const [expandAll, setExpandAll] = useState(false);
  const [buttonText, setButtonText] = useState('Expand All');
  const [questions, setQuestions] = useState([]);

  const content = <FaqForm />;

  function loadQuestions() {
    $.getJSON('/frequently_asked_questions', (results) => {
      setQuestions(results);
    });
  }

  useEffect(() => {
    loadQuestions();
  }, []);

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
          type="button"
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

      {window.is(['staff', 'admin']) && (
        <Accordian accordianTitle="Add A Frequently Asked Question" accordianContent={content} hideEditButton />
      )}

      {questions.map((question) => (
        <Accordian id={question.id} expandAll={expandAll} accordianTitle={question.title} accordianContent={question.content} />
      ))}
    </Frame>
  );
};

export default Faq;
