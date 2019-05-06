import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewUser from "./Components/NewUser";
import './App.css';
import Navbar from './Components/Layout/Navbar';
import NewTeam from "./Components/NewTeam";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar />

                    <div>
                        <Route path='/addNewUser' component={NewUser} />
                        <Route path='/addNewTeam' component={NewTeam} />

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;