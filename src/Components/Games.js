import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class Games extends React.Components {
    constructor(){
        super();
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/games`).then((response) => {
            const gamesRes = response.data;
            alert(gamesRes);
            this.setState({games: gamesRes})
        })
    };
}