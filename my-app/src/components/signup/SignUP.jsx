import { Form, ButtonToolbar, Button } from "rsuite";
import styles from "./SignUP.module.css";
import "rsuite/dist/rsuite.min.css";

const SignUP = () => {

  return (
    <div className={styles.wrapper}>
      <Form className={styles.form}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar className={styles.buttons}>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default" style={{marginLeft: "0"}}className={styles.borderButton}>Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUP;
