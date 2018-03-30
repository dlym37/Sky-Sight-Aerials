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
            <div onClick={this.openMenu}>
                <div className='header'>
                    <img src={menuBtn} className='menu' alt='menu' onClick={this.openMenu}/>
                    <Link to='/'><img src={logo} className='logo' alt='logo'/></Link>
                </div>
                <div className={this.state.open ? 'pop-out hidden' : 'pop-out'}>
                    <div className='navList'>
                        <Link to='/RealEstate' className='nav-opt'> <div >REAL ESTATE</div></Link>
                        <Link to='/Events' className='nav-opt'> <div>EVENTS</div></Link>
                        <Link to='/Weddings' className='nav-opt'><div>WEDDINGS</div></Link>
                        <Link to='/ExtremeSports' className='nav-opt'><div>EXTREME SPORTS</div></Link>
                        <Link to='/Contact' className='nav-opt'><div>CONTACT US</div></Link>
                        <Link to='/About' className='nav-opt'><div>ABOUT US</div></Link>
                        <Link to='/Blog' className='nav-opt'><div>BLOG</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;