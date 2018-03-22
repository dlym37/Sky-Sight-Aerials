import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Events from './components/Events';
import ExtremeSports from './components/ExtremeSports';
import Home from './components/Home';
import RealEstate from './components/RealEstate';
import Weddings from './components/Weddings';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Blog' component={Blog}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Events' component={Events}/>
        <Route path='/ExtremeSports' component={ExtremeSports}/>
        <Route path='/RealEstate' component={RealEstate}/>
        <Route path='/Weddings' component={Weddings}/>
    </Switch>
)