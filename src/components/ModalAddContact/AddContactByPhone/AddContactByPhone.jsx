import React from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";

export const AddContactByPhone = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Contact name</Label>
          <Input placeholder="Full name or Nick name"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">+84</InputGroupAddon>
            <Input placeholder="Phone number to contact"></Input>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};
