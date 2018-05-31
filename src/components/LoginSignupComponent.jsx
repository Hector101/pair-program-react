import React from 'react';
import { Button, Input, Label, Form, Icon } from 'semantic-ui-react';

import '../_scss/LoginComponent.scss';

class LoginSignupComponent extends React.Component {
  state = {
    formType: 'login',
  }

  _toggleForm = (event) => {
    this.setState({
      formType: event.target.name,
    })
  }

  _renderLogin = () => (
      <div className="login">
        <div className="title">LOGIN</div>
        <Form>
          <Form.Field>
            <Label pointing="below" basic color="grey">Enter email</Label>
            <Input className="input" focus type="email" placeholder='Email'/>
          </Form.Field>
          <Form.Field>
            <Label pointing="below" basic color="grey">Enter password</Label>
            <Input focus type="password" placeholder='Password'/>
          </Form.Field>
          <Form.Field className="login-btn">
            <Button basic color="teal">Login</Button>
            <a className="register-link" name="signup" onClick={this._toggleForm}>Sign Up</a>
          </Form.Field>
          <Form.Field>
            <Button.Group>
              <Button color="facebook"><Icon size="large" name="facebook official"></Icon>Facebook</Button>
              <Button.Or />
              <Button positive><Icon size="large" name="github"></Icon>Github</Button>
              <Button.Or />
              <Button positive color="google plus" ><Icon size="large" name="google"></Icon>Google</Button>
            </Button.Group>
          </Form.Field>
        </Form>
      </div>
  );

  _renderSignup = () => (
    <div className="register">
      <div className="title">REGISTER</div>
      <Form>
        <Form.Field>
          <Label pointing="below" basic color="grey">Enter Full name</Label>
          <Input focus placeholder='Full Name'/>
        </Form.Field>
        <Form.Field>
          <Label pointing="below" basic color="grey">Enter email</Label>
          <Input focus type="email" placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <Label pointing="below" basic color="grey">Enter password</Label>
          <Input focus type="password" placeholder='Password'/>
        </Form.Field>
        <Form.Field>
          <Label pointing="below" basic color="grey">Re-enter password</Label>
          <Input focus type="password" placeholder='Password'/>
        </Form.Field>
        <Form.Field className="register-btn">
          <Button basic color="teal">Sign Up</Button>
          <a className="login-link" name="login" onClick={this._toggleForm}>Login</a>
        </Form.Field>
      </Form>
    </div>
  );

  render() {
    const { formType} = this.state;
    return (
      <div className="signin-signup">
        <div className="materialContainer">
          {
            formType === 'login' 
              ? this._renderLogin()
              : this._renderSignup()
          }
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
};

export default LoginSignupComponent;