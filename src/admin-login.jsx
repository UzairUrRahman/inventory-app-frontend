import { Button, Col, Container, Form, Image } from "react-bootstrap";
import "./App.css";
import Logo from "./assets/img/checklistLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="d-flex align-items-center justify-content-center  min-vh-100 form">
                <Container>
                    <Col lg={4} className="mx-auto text-center">
                        <Image src={Logo} alt="" className="img-fluid mb-5" />
                        <h5 className="mb-4">Login as Admin</h5>
                        <Form.Control
                            type="email"
                            placeholder="Enter username"
                            className="mb-3"
                        />
                         <div className="position-relative mb-3">
                            <Form.Control
                                type={show ? "text" : "password"}
                                placeholder="Enter password"

                            />
                            <span className="eyeIcon pointer" onClick={() => setShow(!show)}>
                                {
                                    show ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>
                                }
                            </span>
                        </div>

                        <div>
                            <Link to={"/"} className="text-muted">Forgot Password</Link>
                        </div>
                        <Link to={'/manage-task'}>
                            <Button className="btnPrimary mt-4 w-100">
                                Login
                            </Button>
                        </Link>
                    </Col>
                </Container>
            </div>
        </>
    );
}

export default AdminLogin;
