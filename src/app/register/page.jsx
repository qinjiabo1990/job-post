'use client';

import { useState } from 'react';
import Logo from 'components/Logo/Logo';
import Card from 'components/Card/Card';
import FormInputRow from 'components/FormInputRow/FormInputRow';
import {
  Container, FormTitle, Form, StyledButton as Button, MemberSwitchContainer,
} from './page.styles';

function RegisterPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  const handleOnChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Container>
      <Card>
        <Logo />
        <FormTitle>Register</FormTitle>
        <Form onSubmit={handleOnSubmit}>
          <FormInputRow onChange={handleOnChange} type="text" name="name" />
          <FormInputRow onChange={handleOnChange} type="text" name="email" />
          <FormInputRow onChange={handleOnChange} type="password" name="password" />
          <Button type="submit">Submit</Button>
        </Form>
        <Button variant="secondary">Demo App</Button>
        <MemberSwitchContainer>Already a memeber? <Button variant="text">Login</Button></MemberSwitchContainer>
      </Card>
    </Container>
  );
}

export default RegisterPage;
