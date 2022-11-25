import React, { useState, useEffect } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import Accordian from './general/accordian';

const Faq = () => {
  const [expandAll, setExpandAll] = useState(false);
  const [buttonText, setButtonText] = useState('Expand All');
  const [questions, setQuestions] = useState([]);

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
      {questions.map((question, index) => (
        <Accordian item={index} expandAll={expandAll} accordianTitle={question.title} accordianContent={question.content} />
      ))}
    </Frame>
  );
};

export default Faq;
