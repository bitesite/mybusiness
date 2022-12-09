import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import { Tag, COLORS, ModalDialog, CloseIcon, Button } from "../bitesite-ui";
import BlogCard from "../components/Blog/blog_card";
import { Frame } from "@bitesite/react-figstrap";
import styled from "styled-components/macro";
import Pagination from "../components/pagination";
import { decodeQueryParams } from "../src/utilities/general_helpers";
import BlogPostSubscribeImage from "../../assets/images/blog_post_subscribe.png";
import { Icon } from "@iconify/react";
import { getTagList, tags } from "../src/utilities/blog_post_helpers";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";

const BlogFrame = styled(Frame)`
  .blog-tag-title {
    width: fit-content;
    white-space: nowrap;
  }
  .blog-post-tag-modal {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    .modal-body {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .modal-filter-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  .blog-page-tag-button {
    width: 100%;
    .filter-icon {
      margin-right: 10px;
    }
  }
  @media (max-width: 780px) {
    padding: 40px 0;
  }
`;

const BlogPostsFrame = styled(Frame)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  .blog-card {
    flex: 1 1 21%;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .blog-card {
      flex: 1 1 100%;
    }
  }
`;

const BlogTagsFrame = styled(Frame)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(780));
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(780));
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
    window.history.pushState(params, "", `?${queryString.stringify(params)}`);
  };

  function getBLogPosts() {
    $.getJSON(
      "/blog/paginated_index",
      { page: pageNumber, filters: selectedFilters },
      (result) => {
        setBlogPosts(result.blog_posts);
        if (result.total < 9) {
          setPageNumber(1);
          setUrlQueryFromFilters();
        } else {
          setPageNumber(result.page);
        }
        setTotalPages(result.pages);
        setTotalPosts(result.total);
      }
    );
  }

  const clearFilters = () => {
    setSelectedFilters({});
    setIsTagModalOpen(false);
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
    if (
      updatedFilters["tag_name"] &&
      updatedFilters["tag_name"].includes(tag.value)
    ) {
      updatedFilters["tag_name"] = updatedFilters["tag_name"].filter(
        (t) => t !== tag.value
      );
    } else {
      updatedFilters["tag_name"] = updatedFilters["tag_name"]
        ? [...updatedFilters["tag_name"], tag.value]
        : [tag.value];
    }
    setSelectedFilters(updatedFilters);
  };

  const handlePageChange = (page) => {
    setPageNumber(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {isMobileWidth ? (
        <>
          {!isTagModalOpen ? (
            <div className="blog-page-tag-button">
              <Button
                type="secondary"
                onClick={() => setIsTagModalOpen(true)}
                width="100%"
              >
                <Icon icon="bytesize:filter" className="filter-icon" />
                Popular Tags{" "}
                {selectedFilters["tag_name"] &&
                  selectedFilters["tag_name"].length > 0 &&
                  `(${selectedFilters["tag_name"].length})`}
              </Button>
            </div>
          ) : (
            <ModalDialog
              maxWidth="375px"
              modalDialogClassName="blog-post-tag-modal"
            >
              <div className="modal-title body-regular">
                <Icon icon="bytesize:filter" className="filter-icon" />
                Popular Tags:
              </div>
              <CloseIcon
                onClick={() => setIsTagModalOpen(false)}
                width="100%"
              />
              <div className="modal-body">
                {tags &&
                  tags.map((tag) => (
                    <TagButton
                      onClick={() => handleTagSelect(tag)}
                      key={tag.value}
                      className="tag-button"
                    >
                      <Tag
                        className="body-small-light"
                        selected={
                          selectedFilters["tag_name"] &&
                          selectedFilters["tag_name"].includes(tag.value)
                        }
                      >
                        {tag.title}
                      </Tag>
                    </TagButton>
                  ))}
              </div>
              <div className="modal-filter-buttons">
                <Button
                  type="primary"
                  width="100%"
                  onClick={() => setIsTagModalOpen(false)}
                >
                  Apply{" "}
                  <span>
                    [
                    {selectedFilters["tag_name"]
                      ? selectedFilters["tag_name"].length
                      : "0"}
                    ]
                  </span>{" "}
                  Filters
                </Button>
                <Button
                  type="secondary"
                  width="100%"
                  onClick={() => clearFilters()}
                >
                  Clear Filters
                </Button>
              </div>
            </ModalDialog>
          )}
        </>
      ) : (
        <BlogTagsFrame
          className="blog-tags"
          gap={16}
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <div className="blog-tag-title body-medium">Popular Tags:</div>
          {tags &&
            tags.map((tag) => (
              <TagButton
                onClick={() => handleTagSelect(tag)}
                key={tag.value}
                className="tag-button"
              >
                <Tag
                  className="body-small-light"
                  selected={
                    selectedFilters["tag_name"] &&
                    selectedFilters["tag_name"].includes(tag.value)
                  }
                >
                  {tag.title}
                </Tag>
              </TagButton>
            ))}
        </BlogTagsFrame>
      )}
      <BlogPostsFrame>
        {blogPosts &&
          blogPosts.length > 0 &&
          blogPosts.map((blogPost) => {
            return (
              <BlogCard
                onClick={() => {
                  window.location.href = `/blog/${blogPost.slug}`;
                }}
                className="blog-card"
                key={blogPost.id}
                blogPost={blogPost}
                tags={getTagList(blogPost.tag_list)}
              />
            );
          })}
      </BlogPostsFrame>
      {totalPages && totalPages > 1 && (
        <Pagination
          totalCount={totalPosts}
          currentPage={pageNumber}
          onPageChange={handlePageChange}
          pageSize={9}
        />
      )}
      {window.is(["staff", "admin"]) && <a href="/blog/new">New Blog Post</a>}
      <DarkBackgroundGeneralPost
        image={BlogPostSubscribeImage}
        header="Want to stay up to date with BiteSite?"
        text="We round up our top blog articles, company updates and industry recommendations in a regular newsletter for our community. Subscribe, and stay in the know!"
        buttonText="Subscribe to our Newsletter"
        buttonClass="primary-default blog-post-subscribe-button"
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
