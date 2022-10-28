import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import queryString from 'query-string';
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import { Tag, COLORS } from "../bitesite-ui";
import BlogCard from "../components/Blog/blog_card";
import { Frame } from "@bitesite/react-figstrap";
import styled from "styled-components/macro";
import Pagination from "../components/pagination";
import { decodeQueryParams } from "../src/utilities/general_helpers";

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
  const [pageNumber, setPageNumber] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(decodeQueryParams());
  const [totalPages, setTotalPages] = useState(null);
  const [totalPosts, setTotalPosts] = useState(null);
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

  const getPageNumberFromSearch = () => {
    const { search } = window.location;
    const pageNumberFromSearch = search.match(/page=(\d+)/);
    console.log(pageNumberFromSearch);
    if (pageNumberFromSearch) {
      return pageNumberFromSearch[1];
    }
    return 1;
  };

  const setUrlQueryFromFilters = () => {
    const { search } = window.location;
    const params = queryString.parse(search);
    Object.keys(selectedFilters).forEach((key) => {
      params[key] = selectedFilters[key];
    });
    console.log("params", params);
    window.history.pushState(params, '', `?${queryString.stringify(params)}`);
  };

  function getBLogPosts() {
    $.getJSON("/blog/paginated_index", { page: pageNumber, filters: selectedFilters }, (result) => {
      console.log(result);
      setBlogPosts(result.blog_posts);
      setPageNumber(result.page);
      setTotalPages(result.pages);
      setTotalPosts(result.total);
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
    setPageNumber(getPageNumberFromSearch());
    setUrlQueryFromFilters();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobileWidth]);

  useEffect(() => {
    if (pageNumber) {
    getBLogPosts();
    window.history.pushState(null, null, `/blog?page=${pageNumber}`);
    }
  }, [pageNumber]);

  useEffect(() => {
    setUrlQueryFromFilters();
    getBLogPosts();
  }, [selectedFilters]);


  const handleTagSelect = (tag) => {
    const updatedFilters = { ...selectedFilters };
    console.log("updatedFilters", updatedFilters);
    console.log("tag", tag);
    if (updatedFilters[tag.value]) {
      delete updatedFilters[tag.value];
    } else {
      updatedFilters[tag.value] = true;
    }
    setSelectedFilters(updatedFilters);
    console.log("hello");
  };

  const handlePageChange = (page) => {
    setPageNumber(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <TagButton onClick={() => handleTagSelect(tag)}>
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
      {totalPages && totalPages > 1 && (
      <Pagination totalCount={totalPosts} currentPage={pageNumber} onPageChange={handlePageChange} pageSize={9} />
      )}
      <a href="/blog/new">New Blog Post</a>
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
