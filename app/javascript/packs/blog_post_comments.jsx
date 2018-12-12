// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

class BlogPostComments extends React.Component {
  render() {
    return(
      <div>Hello</div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('blog-post-comments-component-mount-point');
  if (element) {
    ReactDOM.render(<BlogPostComments name="React"/>, element);
  }
});