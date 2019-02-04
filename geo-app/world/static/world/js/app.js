import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Bus from './components/Bus';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li>
                        <Link to="/all">aaaaa</Link>
                    </li>
                </ul>
                <Route path="/all" Component={Bus} />
                <Route path="/busroute/:id" render={
                    ({ match }) => <Bus busRoute={match.params.id} />
                }
                />
            </div>
        );
    }
}

export default App;
