import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});



class NewTeam extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            TeamName: ''          
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        console.log(event)

        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    addTeam = () => {
        alert("log");
        const data = {id: 0, TeamName: this.state.TeamName};
        const JSONData = JSON.stringify(data);
        axios.post(BASE_URL + '/team', data)
            .catch((err) => {
                console.log(err);
            });
    }

    on = () => {

        axios.get(`${BASE_URL}/team`).then((response) => {
            const teamRes = response.data;
            alert(teamRes);
            this.setState({teams: teamRes})
        })
    }

    render() {
        return (
            <div>
                <TextField
                    id="standard-name"
                    label="Team Name"
                    name="TeamName"
                    value={this.state.TeamName}
                    onChange={this.handelChange}
                    margin="normal"
                />
                
               
                
                <Button variant="contained" onClick={this.addUser} color="primary">
                    Add Team
                 </Button>

                 <Button variant="contained" onClick={this.on} color="primary">
                    Primary
                 </Button>


        
            </div>
        )
    }

}

export default withRouter(NewTeam);