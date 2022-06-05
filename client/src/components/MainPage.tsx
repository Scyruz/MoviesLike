import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/main.css";

export default function MainPage(): JSX.Element {
  return (
    <div>
      <Container fluid className="main-container">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Container className="form-container">
              <h2
                style={{ textAlign: "center", margin: "1rem 1rem 5rem 1rem" }}
              >
                I want to watch movies like:
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formMovieName">
                  <Form.Control type="text" placeholder="Enter movie" />
                  <Form.Text className="text-muted">
                    The suggestions we make are based on this movie.
                  </Form.Text>
                </Form.Group>
                <Button
                  variant="danger"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
