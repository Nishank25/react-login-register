import React from 'react'
import { GetProfile } from "../../Services/Login/PostData";

export class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        GetProfile('getUserData', localStorage.access_token).then(res => {
            this.setState({
                name: res.user.name,
                email: res.user.email
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile
