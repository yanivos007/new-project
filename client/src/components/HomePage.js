import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, } from "react-router-dom";
import LoginPage from './LoginPage';


export class HomePage extends Component {
    render() {
        return (
            <div>
                <Router>

                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home page</Link>
                                </li>
                                <li>
                                    <Link to="/login">loginPage</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={LoginPage} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default HomePage
