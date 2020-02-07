import React from 'react';
import { LoginData } from "../../Services/Login/PostData";

// React Notification
import { NotificationManager } from 'react-notifications';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            emailError :'',
            passwordError:''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    valid(){
        if(!this.state.email.includes('@') && this.state.password.length < 6){
            this.setState(
                {emailError:'Invalid Email passed', passwordError:'Password lenght should be more than 6'}
            )
        } else if (this.state.password.length < 6){
            this.setState(
                {passwordError : "Password lenght should be more than 6"}
            )
        } else if(!this.state.email.includes('@') ){
            this.setState(
                {emailError :"Invalid Email passed"}
            )
        } else{
            return true;
        }
    }
    register = (e) => {
        e.preventDefault();
        this.props.history.push(`/register`);
    };
    login(){
        this.setState({emailError:'', passwordError:''})
        if(this.valid()){
            LoginData(this.state).then((result) => {
                let responseJson = result;
                if(responseJson){
                    this.props.history.push(`/profile`);
                    NotificationManager.success('You have login successfully', 'Successful!', 2000);
                }else {
                    NotificationManager.error('Error while login !!!', 'Error!');
                }
            })
        }
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    render() {
        return(
            <div className="container">
                <div className="header">Login</div>
                   <div className="content">
                        <div className="form">
                        <div className="jumbotron mt-5">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" name="email" placeholder="username" onChange={this.onChange}/>
                                <p>{this.state.emailError}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" onChange={this.onChange} />
                                <p>{this.state.passwordError}</p>
                            </div>

                            <div className="LoginFooter row">
                                <div className="col-md-5">
                                    <a href="" onClick={this.register}>Create an account</a>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn" onClick={this.login}>Login</button>
                                </div>
                                
                            </div>
                            <div className="col-md-2">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login