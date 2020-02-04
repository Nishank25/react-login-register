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
            gender : '',
            phoneNo : '',
            errors:{}
        }
        this.register = this.register.bind(this);
    }
    valid(){
        let errors = {};
        let isValidate = true;
        if(this.state.firsName === ""){
            isValidate = false;
            errors['firsName'] = "First name is required";
        } if(this.state.lastName === ""){
            isValidate = false;
            errors['lastName'] = "Last name is required";
        } if(!this.state.email.includes('@')){
            isValidate = false;
            errors['email'] = "Email passed is improper";
        } if (this.state.password.length < 6){
            isValidate = false;
            errors['password'] = "Password lenght should be more than 6";
        } if(this.state.password !== this.state.confirmPassword){
            isValidate = false;
            errors['confirmPassword'] = "Password and confirm password does not match.";
        } if(this.state.gender === ""){
            isValidate = false;
            errors['gender'] = "gender is required";
        } if(this.state.phoneNo.length > 10 || this.state.phoneNo.length < 10){
            isValidate = false;
            errors['phoneNo'] = "please pass valid number";
        }
        this.setState({
            errors: errors
        });
        return isValidate
    }
    register(){
        console.log('Before valid');
        if(this.valid()){
            console.log('valid');
            PostData('register', this.state).then((result) => {
                let responseJson = result;
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
                        <p>{this.state.errors.firsName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="last name" onChange={(event) => {this.setState({lastName :event.target.value})}}/>
                        <p>{this.state.errors.lastName}</p>
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
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" name="gender" placeholder="gender" onChange={(event) => {this.setState({gender :event.target.value})}}/>
                        <p>{this.state.errors.gender}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNo">Mobile Number</label>
                        <input type="number" name="phoneNo" placeholder="Phone Number" onChange={(event) => {this.setState({phoneNo :event.target.value})}}/>
                        <p>{this.state.errors.phoneNo}</p>
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