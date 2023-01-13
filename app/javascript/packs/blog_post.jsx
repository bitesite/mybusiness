import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Markdown from "react-remarkable";
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import { Tag, COLORS, ModalDialog } from "../bitesite-ui";
import { Frame } from "@bitesite/react-figstrap";
import { Icon } from "@iconify/react";
import { tagNameToUpperCase } from "../src/utilities/blog_post_helpers";
import moment from "moment/moment";
import BlogCard from "../components/Blog/blog_card";
import Link from "../components/link";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";
import BlogPostSubscribeImage from "../../assets/images/blog_post_subscribe.png";
import SubscribePopup from "../components/subscribe_popup";

const StyledBlogPostContainer = styled.div`
  .all-blog-posts-link {
    margin-bottom: 100px;
  }
`;

const StyledBlogPost = styled(Frame)`
  max-width: 786px;
  margin: 100px auto;
`;

const BlogPostHeader = styled(Frame)`
  width: 100%;
`;

const BlogPostBody = styled(Frame)`
  div {
    width: inherit;
    padding: 0 10px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.shadesLight};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${COLORS.shadesLight};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 780px) {
    height: 220px;
  }
`;

const Tags = styled(Frame)`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${COLORS.shadesLight};
`;

const RelatedPosts = styled(Frame)`
  width: 100%;
  flex-wrap: wrap;
`;

const StyledGeneralPost = styled.div`
.blog-post-subscribe-button {
  width: fit-content;
}
`;

const BlogPost = ({ blogPostId }) => {
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState(null);
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(780));
  const [subscribePopupOpen, setSubscribePopupOpen] = useState(false);

  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(780));
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobileWidth]);

  const getBlogPost = () => {
    $.getJSON(`/blog/${blogPostId}`, (data) => {
      const {
        title,
        body: text,
        author,
        published_at: publishedAt,
        featured_image: featuredImage,
        tag_list: tags,
      } = data.blog_post;
      setBlogPost({ title, text, author, publishedAt, featuredImage, tags });
    });
  };
  const getRelatedPosts = () => {
    $.ajax({
      url: `/blog/${blogPostId}/related_posts`,
      type: "GET",
      dataType: "json",
      data: { tag_names: blogPost.tags },
      success: (data) => {
        setRelatedPosts(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  useEffect(() => {
    if (blogPost) {
      getRelatedPosts();
    }
  }, [blogPost]);

  return (
    <StyledBlogPostContainer className="blog-post-component-mount-point">
      <div className="container">
        <StyledBlogPost
          className="blog-post-component-mount-point"
          vertical
          alignItems="center"
          justifyContent="center"
          gap={isMobileWidth ? 40 : 60}
        >
          {blogPost && (
            <>
              {blogPost.featuredImage && (
                <ImageContainer>
                  <img
                    src={blogPost.featuredImage.url}
                    alt="Blog Post about the article"
                  />
                </ImageContainer>
              )}
              <BlogPostHeader
                vertical
                alignItems="flex-start"
                justifyContent="center"
                gap={20}
              >
                <Tags alignItems="center" justifyContent="flex-start" gap={20}>
                  {blogPost.tags && blogPost.tags.length > 0 &&
                    blogPost.tags.map((tag, i) => (
                      <Tag className="body-small-light" key={i} selected>
                        {tag && tagNameToUpperCase(tag)}
                      </Tag>
                    ))}
                </Tags>
                <div className="blog-post-title heading-regular">
                  {blogPost.title}
                </div>
                <Frame
                  alignItems="center"
                  justifyContent="flex-start"
                  gap={8}
                  className="blog-post-author"
                  width="100%"
                >
                  {blogPost.author.avatar && blogPost.author.avatar.url ? (
                    <Avatar
                      src={blogPost.author.avatar.url}
                      alt="Author Avatar"
                    />
                  ) : (
                    <Icon icon="bi:person-circle" fontSize={30} />
                  )}
                  <Frame alignItems="center" justifyContent="center" gap={8}>
                    {blogPost.author && (
                      <div className="caption-bold">
                        {blogPost.author.first_name} {blogPost.author.last_name}
                      </div>
                    )}
                    <div className="caption-light">
                      {moment(blogPost.publishedAt, "YYYY-MM-DD").format(
                        "MMMM DD, YYYY"
                      )}
                    </div>
                  </Frame>
                </Frame>
              </BlogPostHeader>
              <BlogPostBody
                alignItems="center"
                justifyContent="center"
                gap={8}
                className="blog-post-content"
              >
                <Markdown source={blogPost.text} className="blog-post-text" />
                <div className="blog-post-finish-line" />
              </BlogPostBody>
              <Line className="blog-post-finish-line" />
            </>
          )}
        </StyledBlogPost>
        {relatedPosts && relatedPosts.length > 0 && (
          <Frame
            className="related-posts-container"
            vertical
            alignItems="center"
            justifyContent="center"
            gap={isMobileWidth ? 40 : 60}
          >
            <div className="related-post-title heading-regular">
              Related Posts
            </div>
            <RelatedPosts alignItems="center" justifyContent="center" gap={20}>
              {relatedPosts.map((post, i) => (
                <BlogCard
                  key={i}
                  blogPost={post}
                  tags={post.tag_list}
                  className="related-post"
                  onClick={() => {
                    window.location.href = `/blog/${blogPost.slug}`;
                  }}
                />
              ))}
            </RelatedPosts>
            <Link
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/blog";
              }}
              className="body-small-bold all-blog-posts-link"
            >
              All BiteSite Blog Posts
            </Link>
          </Frame>
        )}
      </div>
      <StyledGeneralPost className="blog-post-subscribe">
      <DarkBackgroundGeneralPost
        image={BlogPostSubscribeImage}
        header="Want to stay up to date with BiteSite?"
        text="We round up our top blog articles, company updates and industry recommendations in a regular newsletter for our community. Subscribe, and stay in the know!"
        buttonText="Subscribe to our Newsletter"
        buttonClass="primary-default blog-post-subscribe-button"
        onClick={(e) => {
          e.preventDefault();
          setSubscribePopupOpen(true);
        }}
      />
      </StyledGeneralPost>
      {subscribePopupOpen && (
         <ModalDialog
         maxWidth="783px"
         modalDialogClassName="blog-post-subscribe-modal"
         padding="0 0 0 0"
         popup
         marginTop="15%"
       >
        <SubscribePopup onClose={() => setSubscribePopupOpen(false)} />
        </ModalDialog>
      )}
    </StyledBlogPostContainer>
  );
};

export default BlogPost;

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("blog-post-component-mount-point");
  if (element) {
    ReactDOM.render(
      <BlogPost blogPostId={element.dataset.blogPostId} />,
      element
    );
  }
});
