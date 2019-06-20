import React, { Component } from 'react';
import {Col} from 'reactstrap';
import './Login.css';
import AuthService from './AuthService';
import loginImage from "../imageAssets/login-image.svg";

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if(this.Auth.loggedIn())
            this.props.history.replace('/')
    }

    render() {
        return (
            <div className="container">
                <div className="parent-page">
                <div className="card">
                    <Col>
                    <h1>LOGIN</h1>
                    </Col>
                    <Col>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Email</label>
                        <input
                            className="form-item"
                            placeholder="admin@gmail.com"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            className="form-item"
                            placeholder="***************"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="LOGIN"
                            type="submit"
                        />
                    </form>
                    </Col>
                </div>
                <h1 className="horecamind-logo">horeca<span>mind</span></h1>
                <h2 className="cms-control">CONTROL MANAGEMENT SYSTEM</h2>
                <div>
                    <img className="form-bg" src={loginImage} />
                
                </div>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }
}

export default Login;