import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FormValues from './components/setFormValues';
import validationStates from './components/validationStates';

function App() {
  const clickSubmit = (() => {
    const isValidEmail = validationStates.emailState(FormValues.formValues.email);
    const isValidPassword = validationStates.passwordState(FormValues.formValues.password);

    if (isValidEmail && isValidPassword) {
        alert("El correo y la contraseña son válidos");
    } else {
        alert("El correo o la contraseña no son válidos");
    }
});

    

  return (
    <div>
    <h1>Ejemplo de formularios!</h1>
    <Form>
    <Form.Group className="mb-6" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={FormValues.handleEmailChange} value={FormValues.email}/>
    { !validationStates.emailState && <Form.Text className="text-muted">We'll
    never share your email with anyone else.</Form.Text>}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
    onChange={FormValues.handlePasswordChange} value={FormValues.password} />
    { !validationStates.passwordState && <Form.Text
    className="text-muted">Your password should be have numbers and letters and
    should be at least 9 char long</Form.Text>}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label>Favorite Class</Form.Label>
    <Form.Select onChange={FormValues.handleSelectChange}>
    <option value="1">ISIS3710</option>
    <option value="2">Programación con tecnologias web</option>
    </Form.Select>
    </Form.Group>
    <Button variant="primary" onClick={clickSubmit}>
    Submit
    </Button>
    </Form>
    </div>
    );      
}



export default App;