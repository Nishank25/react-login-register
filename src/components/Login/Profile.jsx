import React from 'react'
import { editData,GetProfile } from "../../Services/Login/PostData";

// React Notification
import { NotificationManager } from 'react-notifications';

export class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            id:'',
            errors: ''
        }
        this.edit = this.edit.bind(this);
    }
    componentDidMount() {
        GetProfile(localStorage.usertoken).then(res => {
            if(res){
                this.setState({
                    name: res.user.name,
                    email: res.user.email,
                    id: res.user.id
                })
            }else{
                localStorage.removeItem('usertoken')
                this.props.history.push(`/`)
            }
        })
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
        } 
        this.setState({
            errors: errors
        });
        return isValidate
    }
    edit(){
        if(this.valid()){
            editData(this.state).then((result) => {
                let responseJson = result;
                console.log(responseJson);
                if(responseJson){
                    NotificationManager.success('Profile edited successfully', 'Successful!', 2000);
                }else {
                    NotificationManager.error('Error while Editing the user !!!', 'Error!');
                }
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <div className="form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="name" value = {this.state.name} onChange={(event) => {this.setState({name :event.target.value})}}/>
                                <p>{this.state.errors.name}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" value = {this.state.email} onChange={(event) => {this.setState({email :event.target.value})}}/>
                                <p>{this.state.errors.email}</p>
                            </div>
                            <div className="ProfileFooter">
                                <button type="button" className="btn" onClick={this.edit}>Edit</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
