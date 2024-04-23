import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
function VideoCard({ video }) {
  const videoComments = video.comments;
  return (
    <div>
      <Card style={{ width: '35rem' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '16px' }}>{video.title}</Card.Title>
          <Card.Text>{video.description}</Card.Text>
        </Card.Body>
        <iframe
          width="560"
          height="315"
          src={video.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p>Comments</p>
            <ul>
              {videoComments.map((cmt, index) => (
                <li key={index}>
                  {cmt.user} {cmt.text}
                </li>
              ))}
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default VideoCard;
