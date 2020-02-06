import React from 'react';
import { RegisterData } from "../../Services/Login/PostData";
export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email :'',
            password : '',
            confirmPassword : '',
            errors:{}
        }
        this.register = this.register.bind(this);
    }
    valid(){
        let errors = {};
        let isValidate = true;
        if(this.state.name === ""){
            isValidate = false;
            errors['name'] = "Name is required";
        } if(!this.state.email.includes('@')){
            isValidate = false;
            errors['email'] = "Email passed is improper";
        } if (this.state.password.length < 6){
            isValidate = false;
            errors['password'] = "Password lenght should be more than 6";
        } if(this.state.password !== this.state.confirmPassword){
            isValidate = false;
            errors['confirmPassword'] = "Password and confirm password does not match.";
        } 
        console.log(isValidate);
        console.log(errors);
        this.setState({
            errors: errors
        });
        return isValidate
    }
    register(){
        console.log("clicked");
        if(this.valid()){
            console.log('validate');
            RegisterData(this.state).then((result) => {
                let responseJson = result;
                console.log(responseJson);
            })
        }
    }
    render() {
        return(
            <div className="container">
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="jumbotron mt-5">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="name" onChange={(event) => {this.setState({name :event.target.value})}}/>
                            <p>{this.state.errors.name}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email" onChange={(event) => {this.setState({email :event.target.value})}}/>
                            <p>{this.state.errors.email}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={(event) => {this.setState({password :event.target.value})}}/>
                            <p>{this.state.errors.password}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="confirm password" onChange={(event) => {this.setState({confirmPassword :event.target.value})}}/>
                            <p>{this.state.errors.confirmPassword}</p>
                        </div>
                        <div className="footer">
                            <button type="button" className="btn" onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register