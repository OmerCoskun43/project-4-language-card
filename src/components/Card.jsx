import Container from "react-bootstrap/Container";
import Language from "./Language";
import { data } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  return (
    <Container
      style={{
        background: "hotpink",
        boxShadow: "-3px 3px 10px 5px rgba(0,0,0,0.4)",
        padding: "1rem 2rem",
      }}
      className="mt-3 rounded-3 h-100 "
    >
      <h1 className="text-light fw-bold mb-1">LANGUAGES</h1>
      <Row className="justify-content-center gy-4">
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Language item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
