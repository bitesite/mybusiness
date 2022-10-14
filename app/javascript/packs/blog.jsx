import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import { Tag, COLORS } from "../bitesite-ui";
import BlogCard from "../components/Blog/blog_card";
import { Frame } from "@bitesite/react-figstrap";
import styled from "styled-components/macro";
import Pagination from "../components/pagination";

const BlogFrame = styled(Frame)`
  padding: 96px 120px 128px;

  .blog-tag-title {
    width: fit-content;
    white-space: nowrap;
  }
  @media (max-width: 760px) {
    padding: 40px 16px;
  }
`;

const BlogPostsFrame = styled(Frame)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TagButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  ${Tag} {
    &:hover {
      cursor: pointer;
      background: ${COLORS.primaryDefault};
      color: ${COLORS.primaryWhite};
    }
    &.selected {
      background: ${COLORS.primaryDefault};
      color: ${COLORS.primaryWhite};
    }
  }
`;

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(760));
  const [page, setPage] = useState(1);

  const tags = [
    { title: "Video Prodution", value: "videoProduction" },
    { title: "Software", value: "software" },
    { title: "Coding", value: "coding" },
    { title: "Ruby on Rails", value: "rubyOnRails" },
    { title: "Business", value: "business" },
    { title: "Custom Software", value: "customSoftware" },
    { title: "React Native", value: "reactNative" },
    { title: "React", value: "react" },
  ];

  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(760));
    }
  }

  function getBLogPosts() {
    $.getJSON("/blog", (result) => {
      console.log(result);
      setBlogPosts(result);
    });
  }

  const getTagList = (tagList) => {
    const updatedTagList = [];
    tagList.forEach((tag) => {
      const tagObject = tags.find((t) => t.value === tag);
      updatedTagList.push(tagObject);
    });
    return updatedTagList;
  };

  useEffect(() => {
    getBLogPosts();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobileWidth]);

  const handleTagClick = () => {
    console.log("hello");
  };

  return (
    <BlogFrame
      vertical
      className="blog-page"
      gap={64}
      alignItems="center"
      justifyContent="center"
    >
      <div
        className={`blog-page-header ${
          isMobileWidth ? "heading-regular" : "heading-large"
        }`}
      >
        The BiteSite Blog
      </div>
      <Frame
        className="blog-tags"
        gap={16}
        alignItems="center"
        justifyContent="center"
      >
        <div className="blog-tag-title body-medium">Popular Tags:</div>
        {tags.map((tag) => (
          <TagButton onClick={handleTagClick}>
            <Tag className="body-small-light" key={tag.value}>
              {tag.title}
            </Tag>
          </TagButton>
        ))}
      </Frame>
      <BlogPostsFrame
        vertical
        className="blog-posts"
        gap={64}
        alignItems="center"
        justifyContent="center"
      >
        {blogPosts &&
          blogPosts.length > 0 &&
          blogPosts.map((blogPost) => {
            return (
              <BlogCard
                key={blogPost.id}
                blogPost={blogPost}
                tags={getTagList(blogPost.tag_list)}
              />
            );
          })}
      </BlogPostsFrame>
      <Pagination totalCount={30} currentPage={page} onPageChange={setPage} pageSize={6} />
    </BlogFrame>
  );
};

export default BlogPage;

BlogPage.propTypes = {};

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("blog-page-component-mount-point");
  if (element) {
    ReactDOM.render(<BlogPage />, element);
  }
});
