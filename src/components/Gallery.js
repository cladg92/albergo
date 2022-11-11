import { Row, Col, Container } from "react-bootstrap";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="right" id="galleria">
        <Row>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/2000/2000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/3000/3000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/4000/4000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/5000/5000" alt="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/2000/2000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/3000/3000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/4000/4000" alt="" />
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden">
            <img src="https://picsum.photos/5000/5000" alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Gallery;
