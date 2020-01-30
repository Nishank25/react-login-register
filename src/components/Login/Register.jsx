/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-expressions */
import React from 'react';

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="first name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirm_password" placeholder="confirm password"/>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">Register</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register