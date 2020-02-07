import React from 'react'

export class Dashbord extends React.Component {
  render() {
    return (
      <div className="container" style={{width : '50%'}}>
        <div className="jumbotron mt-5">
          <div className="col-sm-12">
            <h1 className="text-center">React JS</h1>
            <h4>Small Demo Project</h4>
            <h4>Points which are covered in this project : </h4>
            <h5><ul>
               <li>Login</li> 
               <li>Registration</li> 
               <li>Profile Details</li> 
               <li>Profile Edit</li> 
               <li>All User Details</li> 
              </ul></h5>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashbord