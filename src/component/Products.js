import React, { Component } from 'react';
import '../css/section.css';
import '../css/style.css';
import menuList from '../constants/menuList'

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productKey: this.props.match.params.id
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({productKey:nextProps.match.params.id});
    }
    
    render() {
        return (
            <div className="productContainer">
                    <div className="productRight">
                        <div className="productListing">
                            {menuList.hasOwnProperty(this.state.productKey) && menuList[this.state.productKey].length>0?
                                menuList[this.state.productKey].map((item)=> {
                                    return <div className="productList" id={item.key} key={item.key}>
                                        <div className="productImageHolder" ref={`productImage_${item.key}`}>
                                            <img className="productImg" alt={`${item.key}_image`} alt={`${item.key}_image`} src={item.img} />
                                        </div>
                                        <div className="productName">{item.oil}</div>
                                        <div className="productPrice">{item.price}</div>
                                    </div>
                                })
                            :''}
                        </div>
                    </div>
                </div>
        );
    }

}

export default Products
