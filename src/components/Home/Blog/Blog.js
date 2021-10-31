import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = ({blog}) => {
    const {title,img, des, released} = blog;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h4 className="text-secondary">{released}</h4>
          <Card.Text>
           {des}
          </Card.Text>
          <a className="d-block" href="/">continue...</a>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Blog;