import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App'; //import component from App file (with App name)
import {Router ,Route , browserHistory} from 'react-router'
import FindArticle from './views/FindArticle';
import Matching from './views/Matching';
import CreateArticle from './views/CreateArticle';
import Login from './views/Login';
import Filter from './views/Filter';
import Filter2 from './views/Filter2';
import star from './components/star';
import Article from './views/Article';

// import ModalWrapper from './ModalWrapper';




import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(

    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/FindArticle" component={FindArticle}/>
    <Route path="/Matching" component={Matching}/>
    <Route path="/star" component={star}/>
    <Route path="/CreateArticle" component={CreateArticle}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Filter" component={Filter}/>
    <Route path="/Filter2" component={Filter2}/>
    <Route path="/Article" component={Article}/>




    </Router>

    , document.getElementById('root')
    // <App />,
    // document.getElementById('root') //get App show in root ID
);


