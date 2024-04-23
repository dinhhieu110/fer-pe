import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data from '../../data/db.json';
import VideoCard from '../../components/videoCard/VideoCard';

function Videos() {
  const videos = data.VideosList;
  return (
    <div className="container-fluid">
      <Row>
        <img
          src="./imgs/image.png"
          alt="img"
          style={{ width: '100%', height: '40vh' }}
        />
      </Row>
      <Row>
        {videos.map((video) => (
          <Col key={video.id} className="my-3" md={6}>
            <VideoCard video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Videos;
