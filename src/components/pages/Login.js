import React, { Component } from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

class Login extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            loginId: '',
            password: '',
            isSubmitted: false
        };
    }

    render() {
        return(
            <div className="login-page ng-scope ui-view"> 
                <div className="row"> 
                    <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">

                        <img src={require("../../common/images/flat-avatar.png")} className="user-avatar" />
                        <h1>Word Learner<br/><small>Enhance your vocabulary</small></h1>

                        <form role="form" onSubmit={this.doSignIn.bind(this)} className="ng-pristine ng-valid"> 
                            <div className="form-content"> 
                            <div className="form-group"> 
                                <input type="text" className="form-control input-underline input-lg" placeholder="Email"
                                        onChange={this.handleLoginIdChange.bind(this)}/> 
                            </div> 
                            <div className="form-group"> 
                                <input type="password" className="form-control input-underline input-lg" placeholder="Password"
                                        onChange={this.handlePasswordChange.bind(this)}/> 
                            </div> 
                            </div>
                                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded btn-sides-margin" value="">
                                    Login
                                </button>
                                <button className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.doSignUp.bind(this)}>
                                    Sign up
                                </button> 
                        </form> 
                    </div> 
                </div> 
            </div>
        
        );
    }

    handleLoginIdChange(e) {
        this.setState({loginId: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    doSignIn(e) {
        console.log("Signing In. User: " + this.state.loginId + " Pwd: " + this.state.password);
    }

    doSignUp(e) {
        console.log("Sign Up Request");
    }

    // mixins: [History],
    // setLoginID: function(e) {

    //     this.setState({
    //     loginID: e.target.value,
    //     loginError: ''
    //     });

    // },

    // setPassword: function(e) {

    //     this.setState({
    //     password: e.target.value,
    //     loginError: ''
    //     });

    // },

    // handleLogin: function(e){

    //     e.preventDefault();
    //     this.props.history.pushState(null, '/dashboard/overview');
        
    //     // this.transitionTo('dashboard');

    //     return false;

    // }

}

export default Login;