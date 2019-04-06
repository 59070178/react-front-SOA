import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //import component from App file (with App name)
import {Router ,Route , Link , browserHistory} from 'react-router'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(

    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/header" component={Header}/>
    <Route path="/content" component={Content}/>

    <Route path="/footer" component={Footer}/>
    </Router>

    , document.getElementById('root')
    // <App />,
    // document.getElementById('root') //get App show in root ID
);


