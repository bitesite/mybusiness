import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import GeneralPost from './general/general_post';

const FaqForm = ({ editQuestion, editAnswer, id }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editQuestion) {
      setQuestion(editQuestion);
      setEditing(true);
    }
    if (editAnswer) {
      setAnswer(editAnswer);
      setEditing(true);
    }
  }, [editQuestion, editAnswer]);

  const header = 'Frequently Asked Questions Form';
  const text = (
    <>
      <div className="input-container">
        <label className="body-regular">Question</label>

        <input
          className="input-box-contact"
          type="text"
          value={question}
          required
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />

        <label className="body-regular">Answer</label>

        <input
          className="input-box-contact message"
          type="text"
          required
          value={answer}
          id="message"
          size="584"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </div>
    </>
  );

  const handleSubmitQuestion = () => {
    if ((!question, !answer)) {
      window.alert('Please fill out all fields');
      return;
    }
    if (!editing) {
      $.ajax({
        url: '/frequently_asked_questions',
        method: 'POST',
        data: {
          title: question,
          content: answer,
        },
        success: () => {
          setQuestion('');
          setAnswer('');
          window.location.href = '/services';
        },
        error: () => {
          window.alert('There was an error saving your question');
        },
      });
    } else {
      $.ajax({
        url: `/frequently_asked_questions/${id}`,
        method: 'PUT',
        data: {
          title: question,
          content: answer,
        },
        success: () => {
          setQuestion('');
          setAnswer('');
          window.location.href = '/services';
        },
        error: () => {
          window.alert('There was an error saving your question');
        },
      });
    }
  };

  return (
    <GeneralPost
      header={header}
      text={text}
      buttonClass="primary-default"
      buttonText="Submit Question"
      onClick={handleSubmitQuestion}
    />
  );
};

export default FaqForm;

FaqForm.propTypes = {
  editQuestion: propTypes.string,
  editAnswer: propTypes.string,
  id: propTypes.number,
};
