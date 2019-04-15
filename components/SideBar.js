import React, { Component } from 'react';
import '../styles/components/_sidebar.scss';

class SideBar extends Component {
    render() {
        return (
            <div className="sideBar">
                <div className="sideButton">
                    <p>I</p>
                </div>
                <div className="sideButton">
                    <p>F</p>
                </div>
                <div className="sideButton">
                    <p>T</p>
                </div>
            </div>
        )
    }
}

export default SideBar;
