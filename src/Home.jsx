import { Button, Col, Container, Form, Image } from "react-bootstrap";
import "./App.css";
import Logo from "./assets/img/checklistLogo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center  min-vh-100">
        <Container>
          <Col lg={4} className="mx-auto text-center">
            <Image src={Logo} alt="" className="img-fluid mb-5" />
            <div>
              <Link to={"/employee-login"}>
                <Button className="btnPrimary w-100 my-2">
                  Login as an Employee
                </Button>
              </Link>
              <Link to={"/admin-login"}>
                <Button className="btnPrimary w-100">Login as an Admin</Button>
              </Link>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default Home;
