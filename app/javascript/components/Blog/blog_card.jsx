import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled, { css } from 'styled-components/macro';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import { Card, Tag, COLORS } from '../../bitesite-ui';

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-color: ${COLORS.shadesLight};
`;

const CardTitle = styled.div`
  color: ${COLORS.shadowDarknest};
`;

const CardText = styled.div`
  color: ${COLORS.shadesLight};
  height: 105px;
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

const BlogCard = ({ tags, blogPost }) => {
  const { title, body: text, author, published_at: publishedAt, featured_image: featuredImage } = blogPost;

  return (
    <Card>
      {featuredImage && <CardImage src={featuredImage.url} alt="Blog Post Picture about the article" />}
      <Frame alignItems="center" justifyContent="flex-start" gap={8}>
        {tags &&
          tags.map((tag, i) => (
            <Tag className="body-small-light" key={i}>
              {tag.title}
            </Tag>
          ))}
      </Frame>
      <CardTitle className="body-large">{title}</CardTitle>
      <CardText className="body-small">{text.slice(0, 200).concat('...')}</CardText>
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
    </Card>
  );
};

BlogCard.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  blogPost: PropTypes.object,
};

export default BlogCard;
