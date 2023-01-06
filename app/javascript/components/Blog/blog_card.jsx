import React from 'react';
import TextTruncate from 'react-text-truncate';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled, { css } from 'styled-components/macro';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import { Card, Tag, COLORS } from '../../bitesite-ui';

const CardImageContainer = styled.div`
  width: 100%;
  height: 210px;
  background-color: ${COLORS.shadesLight};
  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
`;

const CardTags = styled(Frame)`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const CardTitle = styled.div`
  color: ${COLORS.shadowDarknest};
`;

const CardText = styled.div`
  color: ${COLORS.shadesDark};
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const FooterFrame = styled(Frame)`
  height: 31px;
  width: fit-content;
`;

const BlogCard = ({ tags, blogPost, width, onClick, className }) => {
  const { title, body: text, author, published_at: publishedAt, featured_image: featuredImage } = blogPost;

  return (
    <Card width={width} onClick={onClick} className={className}>
      {featuredImage && (
        <CardImageContainer>
          <img src={featuredImage.url} alt="Blog Post about the article" />
        </CardImageContainer>
      )}
      <CardTags alignItems="center" justifyContent="flex-start">
        {tags &&
          tags.map((tag, i) => (
            <Tag className="body-small-light" key={i}>
              {tag && tag.title}
            </Tag>
          ))}
      </CardTags>
      <CardTitle className="body-large">{title}</CardTitle>
      <CardText className="body-small-light" id="text">
        <TextTruncate line={4} element="span" truncateText="…" text={text} />
      </CardText>
      <Frame alignItems="flex-start" justifyContent="center" gap={8}>
        {author.avatar && author.avatar.url ? (
          <Avatar src={author.avatar_url} alt="Author Avatar" />
        ) : (
          <Icon icon="bi:person-circle" fontSize={30} />
        )}
        <FooterFrame alignItems="flex-start" justifyContent="center" vertical>
          {author && (
            <div className="caption-bold">
              {author.first_name} {author.last_name}
            </div>
          )}
          <div className="caption-light">{moment(publishedAt).format('MMMM D, YYYY')}</div>
        </FooterFrame>
      </Frame>
      {window.is(['staff', 'admin']) && (
        <Frame alignItems="center" justifyContent="center" gap={8}>
          <a href={`/blog/${blogPost.id}/edit`} className="edit-button">
            Edit
          </a>
        </Frame>
      )}
    </Card>
  );
};

BlogCard.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  blogPost: PropTypes.object,
  width: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default BlogCard;
