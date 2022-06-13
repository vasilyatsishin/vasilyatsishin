import { Nav, Navbar } from "rsuite";
import styles from "./MainNavbar.module.css"

const MainNavbar = () => {
  return (
    <>
      <Navbar className={styles.wrapper}>
        <Navbar.Brand href="/">Головна</Navbar.Brand>
        <Nav>
          <Nav.Item>Зареєструватись</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};
export default MainNavbar;
