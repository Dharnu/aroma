import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../css/header.css';
import '../css/footer.css';
import '../css/section.css';
import '../css/style.css';

// components
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import Home from './Home'
import Products from './Products'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page:'home'
        }
    }

    render() {
        return (
            <div className="aromaConatiner">
                <Header  {...this.props} />
                <Carousel />
                {this.props.location.pathname === '/' ?
                    <Home {...this.props} />
                :
                    <Products {...this.props} />
                }
                <Footer {...this.props} />
            </div>
        );
    }

}
export default App;