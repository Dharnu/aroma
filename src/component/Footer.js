import React, {Component} from 'react'
import menuList from '../constants/menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import * as Brands from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    goToLink(url) {
        this.props.history.push('/go/' + url);
    }
    //onClick={this.goToLink.bind(this, listItem.url)}
    
    render() {
        return (
            <footer>
                <div className="footerItems">
                    <div className="footerItemFirstContainer">
                        {menuList.footer.length>0 && menuList.footer.map((listItem)=> {
                            return  <div className="itemListsFooter" id={listItem.name} key={listItem.url}
                                >{listItem.name}</div>;
                        })}
                    </div>
                </div>
                <div className="copyRight">
                    <span>&copy; 2018 AROMA ENCHANTED</span>
                </div>
            </footer>
        );
    }

}

export default Footer
