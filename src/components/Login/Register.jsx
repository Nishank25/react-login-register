import React from 'react';
import { PostData } from "../../Services/Login/PostData";
export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firsName : '',
            lastName : '',
            email :'',
            password : '',
            confirmPassword : '',
            firstNameError :'',
            lastNameError :'',
            emailError :'',
            passwordError :'',
            confirmPasswordError :''
        }
        this.register = this.register.bind(this);
    }
    valid(){
        if(this.state.firsName.length == " "){
            this.setState(
                {firstNameError :"First name is required"}
            )
        } else if(this.state.lastName.length == " "){
            this.setState(
                {lastNameError :"Last name is required"}
            )
        } else if(!this.state.email.includes('@')){
            this.setState(
                {emailError:'Invalid Email passed'}
            )
        } else if (this.state.password.length < 6){
            this.setState(
                {passwordError : "Password lenght should be more than 6"}
            )
        } else if(this.state.password != this.state.confirmPassword){
            this.setState(
                {confirmPasswordError : "Password does not match"}
            )
        } else{
            return true;
        }
    }
    register(){
        this.setState({firstNameError:'', lastNameError:'' , emailError:'' , passwordError:'' , confirmPasswordError:''})
        if(this.valid()){
            PostData('register', this.state).then((result) => {
                let responseJson = result;
                console.log(responseJson);
            })
        }
    }
    render() {
        return(
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firsName">First Name</label>
                        <input type="text" name="firsName" placeholder="first name" onChange={(event) => {this.setState({firsName :event.target.value})}}/>
                        <p>{this.state.firstNameError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="last name" onChange={(event) => {this.setState({lastName :event.target.value})}}/>
                        <p>{this.state.lastNameError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" onChange={(event) => {this.setState({email :event.target.value})}}/>
                        <p>{this.state.emailError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={(event) => {this.setState({password :event.target.value})}}/>
                        <p>{this.state.passwordError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="confirm password" onChange={(event) => {this.setState({confirmPassword :event.target.value})}}/>
                        <p>{this.state.confirmPasswordError}</p>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn" onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register