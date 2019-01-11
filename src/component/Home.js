import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import menuList from '../constants/menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"


class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
//    componentDidMount() {
//        menuList.category.map((item)=> {
//            this.refs[`actualImage_${item.key}`].children[0].src = item.img;
//        })
//    }

    viewMoreProduct(key) {
        this.props.history.push('/' + key);
    }
    
    render() {
        return (
            <div className="productContainer">
                <div className="homeCategoryConatiner">
                    {menuList.category.length>0?
                        menuList.category.map((item)=> {
                            return <div className="homeCategoryListing" id={item.key} key={item.key}>
                                <div className="homeCategoryImgContainer" ref={`actualImage_${item.key}`}>
                                    <img alt={`${item.key}_image`} alt={`${item.key}_image`} src={item.img}/>
                                </div>
                                <div className="homeCategoryTitle">{item.name}</div>
                                <div className="homeCategoryDesc">{item.desc}</div>
                                <div className="homeCategoryAction" onClick={this.viewMoreProduct.bind(this, item.key)}>
                                    <div>View More</div>
                                </div>
                            </div>
                        })  
                        :''
                    }
                </div>
            </div>
        );
    }

}

export default Home
