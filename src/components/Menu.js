import react from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";


const Imenu = () => {
    return (
        <div>
            <Nav tabs>
                <NavItem className="" >
                    <Link tag="a" to="/" className="list-group-item list-group-item-action">
                        Home
                    </Link>
                </NavItem>

                <NavItem>
                    <Link tag="a" to="/view-employee" className="list-group-item list-group-item-action">View Employee</Link>
                </NavItem>
                <NavItem>
                    <Link tag="a" to="/add-employee" className="list-group-item list-group-item-action">Add Employee</Link>
                </NavItem>
            </Nav>
        </div>
    )
};

export default Imenu;