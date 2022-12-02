// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      body: '',
      comments: [],
      errors: [],
      submitting: false,
    };
  }

  componentDidMount() {
    this.loadComments();
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  loadComments = () => {
    const { blogPostId } = this.props;

    $.getJSON(`/blog/${blogPostId}/comments`, (comments) => {
      this.setState({ comments });
    });
  };

  submitComment = (e) => {
    e.preventDefault();
    this.setState({ submitting: true });
    const { name, email, body } = this.state;
    const { blogPostId } = this.props;

    $.ajax({
      url: `/blog/${blogPostId}/comments`,
      method: 'POST',
      dataType: 'JSON',
      data: { comment: { name, email, body } },
      success: () => {
        this.setState({ submitting: false, status: 'Success!', name: '', email: '', body: '' });
        this.loadComments();
      },
      error: (jqXHR, textStatus, errorThrown) => {
        this.setState({
          errors: jqXHR.responseJSON,
          submitting: false,
          status: "We're sorry, but there was an error submitting your comment.",
        });
      },
    });
  };

  render() {
    const { name, email, body, comments, status, errors, submitting } = this.state;
    return (
      <div id="component-comments">
        <h2>Comments</h2>
        <div className="comments-list">
          {comments.length == 0 ? (
            <div>There are currently no comments for this post. Be the first to comment below!</div>
          ) : (
            <>
              {comments.map((comment) => (
                <div className="comment">
                  <div className="body">{comment.body}</div>
                  <div className="author">{comment.name}</div>
                </div>
              ))}
            </>
          )}
        </div>
        <form className="comments-form">
          <h3>Submit your own</h3>
          <div className="field">
            <label>Name (will be visible to the public)</label>
            <input type="text" name="name" onChange={this.handleInputChange} value={name} />
          </div>
          <div className="field">
            <label>Email (will NOT be visible to the public)</label>
            <input type="text" name="email" onChange={this.handleInputChange} value={email} />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea rows="4" name="body" onChange={this.handleInputChange} value={body} />
          </div>
          <div className="actions">
            <a href="#" className="btn btn-primary" onClick={this.submitComment}>
              {submitting ? 'Submitting...' : 'Submit'}
            </a>
          </div>
          <div className="status">
            {status}
            {errors.length > 0 && (
              <ul className="comments-errors">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    );
  }
}

Comments.propTypes = {
  blogPostId: PropTypes.number.isRequired,
};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('blog-post-comments-component-mount-point');
  if (element) {
    ReactDOM.render(<Comments blogPostId={element.dataset.blogPostId} />, element);
  }
});
