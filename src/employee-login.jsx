import { Button, Col, Container, Form, Image } from "react-bootstrap";
import "./App.css";
import Logo from "./assets/img/checklistLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function EmployeeLogin() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/employee/login`, {
                email,
                password
            });
            const { token, user } = response.data;
            console.log({user, token});
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/task-list")
        } catch (error) {
            alert(error.response.data.message);
            console.error('Login failed:', error);
            // Handle error, such as displaying error message to the user
        }
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center min-vh-100 form">
                <Container>
                    <Col lg={4} className="mx-auto text-center">
                        <Image src={Logo} alt="" className="img-fluid mb-5" />
                        <h5 className="mb-4">Login as Employee</h5>
                        <Form.Control
                            type="email"
                            placeholder="Enter username"
                            className="mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="position-relative mb-3">
                            <Form.Control
                                type={show ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <Button className="btnPrimary mt-4 w-100" onClick={handleLogin}>
                            Login
                        </Button>
                    </Col>
                </Container>
            </div>
        </>
    );
}

export default EmployeeLogin;
