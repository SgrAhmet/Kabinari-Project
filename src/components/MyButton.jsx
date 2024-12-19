import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyButton = ({name,consoleLog}) => {

    const handleButton =()=>{
        console.log(consoleLog)
    }

  return (
    <div>
      <button onClick={handleButton}>{name}</button>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        please Enter Password
      </Form.Text>

<Button as="a" variant="success">
    Button as link
  </Button>
    </div>
  );
};

export default MyButton;
