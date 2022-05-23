import { Form, ButtonToolbar, Button } from "rsuite";
import styles from "./SignUP.module.css";
import "rsuite/dist/rsuite.min.css";
import ButtonSignUp from "../Main/button/ButtonSignUp";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions";
import { useState } from "react";

const SignUP = ({setIsAuth}) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const submit = () => {
      setIsAuth(true)
      dispatch(actions.SET_USER_DATA(data));
  }

  return (
    <div className={styles.wrapper}>
      <Form className={styles.form}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control
            name="name"
            onChange={(e) => {
              setData({ ...data, username: e });
            }}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control
            name="email"
            type="email"
            onChange={(e) => {
              setData({ ...data, email: e });
            }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            autoComplete="off"
            onChange={(e) => {
              setData({ ...data, password: e });
            }}
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar className={styles.buttons}>
            <ButtonSignUp
              text="Sign UP"
              path="/admin"
              func={submit}
            />
            <Button
              appearance="default"
              style={{ marginLeft: "0" }}
              className={styles.borderButton}
            >
              Cancel
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUP;
