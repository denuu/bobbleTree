import React, { Component } from 'react';
import "../styles/sections/_menu.scss";

class Menu extends Component {
    render() {
        return (
            <div className="section">
                <div className="sectionTitle">
                    <h2>Our Flavours</h2>
                </div>

                <div className="menuSection">

                    <div className="menuContainer">
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Milk Tea</p></div>
                        </div>
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Matcha</p></div>
                        </div>
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Taro</p></div>
                        </div>
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Mango</p></div>
                        </div>
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Banana</p></div>
                        </div>
                        <div className="flavourCard">
                            <div className="image"></div>
                            <div className="label"><p>Coffee</p></div>
                        </div>
                    </div>

                    <div className="toppingContainer">
                        <div className="toppingCard">Tapioca</div>
                        <div className="toppingCard">Grass Jelly</div>
                        <div className="toppingCard">Pudding</div>
                        <div className="toppingCard">Lychee</div>
                        <div className="toppingCard">Mango</div>
                        <div className="toppingCard">Oreo</div>
                        <div className="toppingCard">Strawberry</div>
                        <div className="toppingCard">Maple Jelly</div>
                    </div>

                    <div className="previewContainer">
                        {/* SVG goes here */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
