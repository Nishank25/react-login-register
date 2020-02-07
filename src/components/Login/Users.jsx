import React, {Component} from "react";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

export class Users extends Component{
    constructor(props) {
        super(props);
        this.state= {
            users: [],
            isLoading:true,
            tableRows: [],
        };
    }
    componentWillMount = async() => {
        let url = "http://10.0.28.112:2512/api/userlists"
        await axios.get(url, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ users: data.user })
        })
        .then(async() => {
            this.setState({ tableRows:this.assembleUsers(), isLoading:false })
        });
    }
    assembleUsers= () => {
        let users =this.state.users.map((user) => {
            return (
                {
                    number: user.id,
                    name: user.name,
                    email: user.email,
                }
            )
        });
        return users;
    }
    render(){
        const data = {
            columns: [
                {
                    label:'No.',
                    field:'number',
                },
                {
                    label:'Name',
                    field:'name',
                },
                {
                    label:'Email',
                    field:'email',
                },
            ],
            rows:this.state.tableRows,
        }
        return(
            <div className="container">
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                    />
            </div>
        )
    }
}

export default Users