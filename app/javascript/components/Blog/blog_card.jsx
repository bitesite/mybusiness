import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import { Card, Tag, COLORS } from "../../bitesite-ui";

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  background-image: url(${({ src }) => src});
`;

const CardTitle = styled.div`
  color: ${COLORS.shadowDarknest};
`;

const CardText = styled.div`
  color: ${COLORS.shadesDark};
  height: 105px;
`;

const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  height: 31px;
`;

const BlogCard = ({ url, tags, title, text, footerContent }) => (
  <Card>
    <CardImage src={url} alt="Blog Post Image" />
    <CardTags>
      {tags &&
        tags.map((tag, i) => (
          <Tag className="body-small-light" key={i}>
            {tag.title}
          </Tag>
        ))}
    </CardTags>
    <CardTitle className="body-large">{title}</CardTitle>
    <CardText className="body-small">{text}</CardText>
    <CardFooter>{footerContent}</CardFooter>
  </Card>
);

BlogCard.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  text: PropTypes.string,
  footerContent: PropTypes.node,
};

export default BlogCard;
