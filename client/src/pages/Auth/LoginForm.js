import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Col } from '../../components/Grid';
import { Cards } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';


class LoginForm extends Component {
  
  constructor() {
    super();
    
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<Container>
            <Col></Col>
            <Col>

              <Cards title="Welcome to Triangle on Tap!">

                <form style={{marginTop: 10}}>
                  <label htmlFor="username">Username: </label>
                  <Input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password: </label>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Link to="/signup">Register</Link>
                  <FormBtn onClick={this.handleSubmit}>Login</FormBtn>
                </form>
              </Cards>
            </Col>
            <Col size="md-3"></Col>

				</Container>
			)
		}
	}
}

export default LoginForm;
