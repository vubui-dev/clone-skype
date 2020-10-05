import { useUserContext } from "contexts/useUserContext";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";
import "./LoginForm.css";

export const LoginForm = () => {
  const { loginUser } = useUserContext();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [accountLogin, setAccountLogin] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setAccountLogin({ ...accountLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const isLogin = loginUser(accountLogin);
      if (isLogin) {
        history.push("/dashboard");
      } else setIsLoading(false);
    }, 700);
  };
  return (
    <div className="login rounded">
      <div className="login-title text-center mb-4">
        <h3>Login to AWECHAT</h3>
      </div>
      <Form className="text-align" onSubmit={handleSubmitLogin}>
        <FormGroup>
          <Input
            required
            type="username"
            name="username"
            placeholder="Email/Username"
            onChange={handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            required
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </FormGroup>
        <Button type="submit" color="primary" className="w-100">
          Login
        </Button>
      </Form>
      <div className="mt-3 text-right">
        <p>
          You haven't an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      {isLoading && (
        <div className="loading-screen">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
        </div>
      )}
    </div>
  );
};
