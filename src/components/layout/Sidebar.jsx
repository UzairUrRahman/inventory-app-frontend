import { Image, Nav } from "react-bootstrap";
import Logo from './../../assets/img/checklistLogoDash.svg'
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <div className="sidebar">
                <div className="text-center mb-5 mt-3">
                    <Image src={Logo} alt="" className="img-fluid" />
                </div>
                <Nav defaultActiveKey="/task-list" as="ul" className="flex-column">
                    <Nav.Item as="li">
                        <Link className={currentPath == '/task-list' ? "sidemenu Active" : "sidemenu"} to="/task-list"> <span><i className="fa fa-tasks" aria-hidden="true"></i></span>
                            Tasks</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className={currentPath == '/inventory' ? "sidemenu Active" : "sidemenu"} to="/inventory"><span><i className="fa fa-university" aria-hidden="true"></i></span>
                            Inventory</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className={"sidemenu"} to="/"> <span><i class="fa fa-sign-out" aria-hidden="true"></i>
                        </span>
                            Logout</Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    );
}

export default Sidebar;
