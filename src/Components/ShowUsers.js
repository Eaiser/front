/* import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';

class ShowUsers extends React.Component {
    constructor(){
        super();
        this.state ={
            users: []
        }
    }
}

componentDidMount() {
    axios.get(`${BASE_URL}/user`).then((response) => {
        const users = response.data;
        this.setState({lists: board.lists, boardName: board.name, boardId: board.id, loaded: true})
    }).catch((err) => {
        console.log(err);
    });
}

export default withRouter(ShowUsers); */