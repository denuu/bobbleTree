import React, { Component } from 'react';
import '../styles/sections/_locations.scss';

class Locations extends Component {
    render() {
        return (
            <div className="section">
                <div className="sectionTitle">
                    <h2>Where To Find Us</h2>
                </div>

                <div className="mapSection">
                    {/* Google Map */}
                </div>

                <div className="feed">
                    <div className="feedCard">
                        <h3>West End <span className="location">Toronto</span></h3>
                        <p>123 Dundas St. West</p>
                    </div>

                    <div className="feedCard">
                        <h3>Uptown <span className="location">North York</span></h3>
                        <p>1124 Yonge St.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Locations;
