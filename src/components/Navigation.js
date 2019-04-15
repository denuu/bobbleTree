import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../sections/Home';
import Menu from '../sections/Menu';
import Locations from '../sections/Locations';
import Members from '../sections/Members';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navigation">
                        <ul className="navList">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/locations">Locations</Link></li>
                            <li><Link to="/members">Members</Link></li>
                        </ul>
                    </nav>

                    <Route exact title="Home" path="/" component={Home} />
                    <Route exact title="Menu" path="/menu" component={Menu} />
                    <Route exact title="Locations" path="/locations" component={Locations} />
                    <Route exact title="Members" path="/members" component={Members} />
                </Router>
            </div>
        )
    }
}

export default Navigation;
