import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./SignUpForm.css";

export const SignUpForm = () => {
  return (
    <div className="signup rounded">
      <div className="login-title text-center mb-4">
        <h3>Sign up AWECHAT account</h3>
      </div>
      <Form className="text-align">
        <FormGroup>
          <Input type="text" name="name" placeholder="Full name" />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" placeholder="E-mail" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Confirm password"
          />
        </FormGroup>
        <Button type="submit" color="primary" className="w-100">
          Sign up
        </Button>
      </Form>
      <div className="mt-3 text-right">
        <p>
          You already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};
