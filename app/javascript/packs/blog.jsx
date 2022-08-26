import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isMobileScreenSize } from '../src/utilities/general_helpers';
import { Card } from '../bitesite-ui';

const BlogPage = ({blogPosts}) => {
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(760));
  console.log(blogPosts);


  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(760));
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isMobileWidth]);

  return (
  <div className="blog-page fgs-al fgs-al-v">
   {blogPosts && blogPosts.map(blogPost => {
      return (
        <Card key={blogPost.id} url={blogPost.featured_image && blogPost.featured_image.url} />

      )
   } )}
  </div>
);
  }

export default BlogPage;

BlogPage.propTypes = {};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('blog-page-component-mount-point');
  if (element) {
    const { blogPosts } = element.dataset;
    console.log(blogPosts);
    ReactDOM.render(<BlogPage blogPosts={JSON.parse(blogPosts)} />, element);
  }
});
