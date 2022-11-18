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
import GeneralPost from "../components/general/general_post";
import BlogPostSubscribeImage from "../../assets/images/blog_post_subscribe.png";
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
    window.history.pushState(params, '', `?${queryString.stringify(params)}`);
  };

  function getBLogPosts() {
    $.getJSON("/blog/paginated_index", { page: pageNumber, filters: selectedFilters }, (result) => {
      setBlogPosts(result.blog_posts);
      if(result.total < 9) {
        setPageNumber(1);
        setUrlQueryFromFilters();
      } else {
      setPageNumber(result.page);
      }
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
    if (updatedFilters["tag_name"] && updatedFilters["tag_name"].includes(tag.value)) {
      updatedFilters["tag_name"] = updatedFilters["tag_name"].filter((t) => t !== tag.value);
    } else {
      updatedFilters["tag_name"] = updatedFilters["tag_name"] ? [...updatedFilters["tag_name"], tag.value] : [tag.value];
    }
    setSelectedFilters(updatedFilters);
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
            <Tag className="body-small-light" key={tag.value} selected={selectedFilters["tag_name"] && selectedFilters["tag_name"].includes(tag.value)}>
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
      <GeneralPost
      image={BlogPostSubscribeImage}
      header='Want to stay up to date with BiteSite?'
      text="We round up our top blog articles, company updates and industry recommendations in a regular newsletter for our community. Subscribe, and stay in the know!"
      buttonText="Subscribe to our Newsletter"
      buttonClass="primary-default"
      onClick={() => console.log("clicked")}
    />
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
