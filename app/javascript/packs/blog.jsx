import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isMobileScreenSize } from '../src/utilities/general_helpers';
import { Card } from '../bitesite-ui';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(760));


  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(760));
    }
  }

  function getBLogPosts () {  
    $.getJSON('/blog', (result) => {
      setBlogPosts(result);
    });
  }

  useEffect(() => {
    getBLogPosts();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isMobileWidth]);

  return (
  <div className="blog-page fgs-al fgs-al-v">
   {blogPosts && blogPosts.length > 0 && blogPosts.map(blogPost => {
      return (
        <Card key={blogPost.id} url={blogPost.featured_image && blogPost.featured_image.url} title={blogPost.title} tags={blogPost.tag_list} text={blogPost.body}/>

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
    ReactDOM.render(<BlogPage />, element);
  }
});
