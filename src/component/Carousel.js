import React, {Component} from 'react'
import menuList from '../constants/menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

class Carousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    //2, 4, 10, 12, 13, 14, 15, 16, 19
    //2, 19, 12, 
    //13 with background, 16
    render() {
        return (
            <div className="carouselContainer">
                
                <div style={{width:'100%',height:'100%'}}>
                    <img src={require("./img/carousel/2.jpg")} style={{width:'100%',height:'100%'}} />
                </div>
                <div className="carouselId" style={{display:'none'}}>
                    <div className="slidesCarousel">your content</div>
                    <div className="slidesCarousel">your content1</div>
                    <div className="slidesCarousel">your content2</div>
                </div>
            </div>
        );
    }

}

export default Carousel
