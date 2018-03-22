import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.PNG'
import menu from '../../images/menu.png'
import menuBtn from '../../images/menubtn.png'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            open : false
        }
    this.openMenu = this.openMenu.bind(this);
    }

    openMenu(){
        if(this.state.open){
            this.setState({
            open : false
        })
    } else {
        this.setState({
            open : true
        })
    }
    }

    render(){
        return (
            <div>
                <div className='header'>
                    <img src={menuBtn} className='menu' alt='menu' onClick={this.openMenu}/>
                    <img src={logo} className='logo' alt='logo'/>
                </div>
                <div className={this.state.open ? 'pop-out hidden' : 'pop-out'}>
                    <div className='navList'>
                        <div>REAL ESTATE</div>
                        <div>EVENTS</div>
                        <div>WEDDINGS</div>
                        <div>EXTREME SPORTS</div>
                        <div>CONTACT US</div>
                        <div>ABOUT US</div>
                        <div>BLOG</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;