import React, { Component, useLayoutEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { BASE_URL } from '../constants';

class UserList extends Component {
    

    componentDidMount() {
        Axios.get(BASE_URL+ '/users', )
        .then(res => {
            console.log(res);
            this.setState({userList: res.data});
            
        });
    }

    render() {
        return (
            <ul>    
                {this.state.userList.map(user => <li>{user.firstName}</li>)}
            </ul>
        )
    }

}

export default withRouter(UserList);