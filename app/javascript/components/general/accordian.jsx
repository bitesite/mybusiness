import React, { useState, useEffect } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import { icon } from '@fortawesome/fontawesome-svg-core';
import propTypes from 'prop-types';
import FaqForm from '../faq_form';

const Accordian = ({ accordianTitle, accordianContent, expandAll, id, hideEditButton }) => {
  const [editModal, setEditModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const defaultItem = {
    id,
    showContent: false,
  };
  const [data, setData] = useState(defaultItem);

  function loadQuestion() {
    $.getJSON(`/frequently_asked_questions/${id}`, (results) => {
      setQuestion(results.title);
      setAnswer(results.content);
    });
  }

  function deleteQuestion() {
    if (window.confirm('Are you sure you want to delete this question?')) {
      $.ajax({
        url: `/frequently_asked_questions/${id}`,
        method: 'DELETE',
        data: {
          title: question,
          content: answer,
        },
        success: () => {
          window.alert('success', 'Question deleted successfully');
        },
        error: () => {
          window.alert('error', 'There was an error deleting this question.');
        },
      });
    }
  }

  useEffect(() => {
    if (expandAll) {
      setData((prev) => ({ ...prev, showContent: true }));
    } else {
      setData((prev) => ({ ...prev, showContent: false }));
    }
  }, [expandAll]);

  return (
    <Frame className="accordian" padding="20" vertical>
      <Frame justifyContent="space-between">
        <Frame className="medium ">{accordianTitle}</Frame>
        <div className="accordian-icon">
          {data.showContent && (
            <div
              className="minus-expanded"
              onClick={(e) => {
                e.preventDefault;
                setData((prev) => ({ ...prev, showContent: false }));
                console.log(id);
              }}
            >
              <Icon icon="dashicons:minus" />
            </div>
          )}
          {!data.showContent && (
            <div
              onClick={(e) => {
                e.preventDefault;
                defaultItem.showContent = true;
                setData((prev) => ({ ...prev, showContent: true }));
              }}
            >
              <Icon icon="material-symbols:add" />
            </div>
          )}
        </div>
      </Frame>
      {data.showContent && <Frame className="body-regular accordian-content">{accordianContent}</Frame>}

      {!window.is(['staff', 'admin']) && !hideEditButton && (
        <>
          <Frame justifyContent="flex-end" gap={10}>
            <button
              className="btn edit-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setEditModal(!editModal);
                if (!editModal) {
                  loadQuestion();
                }
              }}
            >
              Edit
            </button>

            <button
              className="btn delete-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                deleteQuestion();
              }}
            >
              Delete
            </button>
          </Frame>
        </>
      )}

      {editModal && <FaqForm editQuestion={question} editAnswer={answer} id={id} />}
    </Frame>
  );
};

export default Accordian;

Accordian.propTypes = {
  accordianTitle: propTypes.string,
  accordianContent: propTypes.string,
  expandAll: propTypes.bool,
  id: propTypes.number,
  hideEditButton: propTypes.boolean,
};
