import React, {Component} from 'react'
import menuList from '../constants/menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuKey: this.props.location.pathname==='/' || this.props.location.pathname==='/home'?'home'
                        :this.props.location.pathname.replace('/','')
        };
    }
    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({
            menuKey:(nextProps.location.pathname==='/' || nextProps.location.pathname==='/home')?'home'
                :nextProps.location.pathname.replace('/','')
        });
    }
    menuChange(url) {
        this.props.history.push('/' + url);
    }
    
    render() {
        debugger;
        return (
            <header>
                <div className={menuList.phase2?"logoContainer":"logoContainerPrimary"}>
                    {menuList.phase2?<div>
                        <input type="hidden" name="type" value="product" />
                        <FontAwesomeIcon icon={Icons.faSearch} />
                        <input className="searchBar" type="search" name="search" />
                    </div>:''}
                    <div><img src={require("./img/logo.png")} className="aromaLogo"/></div>
                    {menuList.phase2?<div className="headerRight">
                        <div className="userAcc">
                            <div className="marginRight10">
                                <FontAwesomeIcon icon={Icons.faUser} />
                            </div>
                            <div>
                                <span className="marginRight10">Login</span>
                                <span className="marginRight10 borderLeft"></span>
                                <span className="marginRight10">Sign Up</span>
                            </div>
                            <div className="marginRight10">
                                <select className="lanPicker">
                                    <option>EN</option>
                                    <option>CA</option>
                                </select>
                            </div>
                        </div>
                        <div className="aromaCart">
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                                <span>Cart</span>
                            </div>
                        </div>
                    </div>:''}
                </div>
                {menuList.menu.length>0?
                    <div className="headerMenuContainer">
                        <ul className="headerMenu" role="navigation" aria-label="primary">
                            {menuList.menu.map((item, index)=>{
                                return <li className={item.url===this.state.menuKey?"parent menuActive":"parent"} key={index} onClick={this.menuChange.bind(this, item.url)}>
                                    <a className="nav-link" aria-haspopup="true"
                                        aria-expanded="false">{item.name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                :''}
                
            </header>
        );
    }

}

export default Header
