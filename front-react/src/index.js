import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App'; //import component from App file (with App name)
import {Router ,Route , browserHistory} from 'react-router'
import Content from './views/Content';
import Navigation from './components/Navigation';
import FindArticle from './views/FindArticle';
import Matching from './views/Matching';
import CreateArticle from './views/CreateArticle';
// import ModalWrapper from './ModalWrapper';




import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(

    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/content" component={Content}/>
    <Route path="/Navigation" component={Navigation}/>
    <Route path="/FindArticle" component={FindArticle}/>
    <Route path="/Matching" component={Matching}/>

    {/* <Route path="/ModalWrapper" component={ModalWrapper}/> */}
    <Route path="/CreateArticle" component={CreateArticle}/>

    </Router>

    , document.getElementById('root')
    // <App />,
    // document.getElementById('root') //get App show in root ID
);


