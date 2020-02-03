import React from 'react';
import { PostData } from "../../Services/Login/PostData";
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
    login(){
        this.setState({emailError:'', passwordError:''})
        if(this.valid()){
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                console.log(responseJson);
            })
        }
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    render() {
        return(
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
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
                    <div className="footer">
                        <button type="button" className="btn" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login