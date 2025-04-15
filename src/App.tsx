import Home from "./assets/Components/Home";
import NavBar from "./assets/Components/NavBar";
import Footer from "./assets/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} xxl={4}>
            <NavBar />
            <Home />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
