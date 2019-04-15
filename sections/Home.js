import React, { Component } from 'react';
import '../styles/sections/_home.scss';

class Home extends Component {
    render() {
        return (
            <div className="section">
                <div className="title">
                    <h1>Bobble <strong>Tree</strong></h1>
                </div>

                <div className="feed">
                    <div className="feedCard">
                        <h3>New <span className="location">Location!</span></h3>
                        <p>Our newest location in downtown Toronto is open for business! We're at 123 Yonge St. Stop by and grab your favourite drink without skipping town!</p>
                    </div>

                    <div className="feedCard">
                        <h3>How <span className="flavour">Matcha</span> Do We Like <span className="flavour">Taro</span></h3>
                        <p>Quite a bit, because our new flavour is Matcha-Taro! If you need that energy boost - or just that matcha taste, but also want that sweet Taro flavour, this is for you.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
