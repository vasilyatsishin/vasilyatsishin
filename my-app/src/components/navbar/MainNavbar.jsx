import { Nav, Navbar } from "rsuite";

const MainNavbar = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#">RESUME</Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Item>Company</Nav.Item>
          <Nav.Item>Team</Nav.Item>
          <Nav.Item>Contact</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};
export default MainNavbar;
