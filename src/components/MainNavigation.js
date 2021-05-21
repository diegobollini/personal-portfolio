import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation = () => {
    cont [currentKey, setCurrentKey] = useState(1);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ padding: "10px", marginBottom: "20px" }}
    >
      <Navbar.Brand className="logo-font" as={Link} to="/" onClick={() => setCurrentKey(1)}>
        <h4 style={{margin:"0"}}>Pending Logo</h4>
      </Navbar.Brand>
      <Navbar.Collapse>
          <Nav className="justify-content-end" activeKey={currentKey} onSelect={(selectedKey) => {setCurrentKey(selectedKey)}}>
              <Nav.Link as={Link} eventKey={1} to="/">
                  Links
              </Nav.Link>
              <Nav.Link as={Link} eventKey={2} to="/projects">
                  Projects
              </Nav.Link>
              <Nav.Link as={Link} eventKey={3} to="/about">
                  About
              </Nav.Link>

          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
