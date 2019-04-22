import React, { Component } from 'react';
import logo from '../assets/image/logo.png'
import '../components/create.css';
import '../components/header.css';


class Navigation extends Component {
    
  render() {
  

    return (


      <header className="header_area white-header">
      <div className="main_menu">
        
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" /> <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item active"> 
                  <a className="nav-link" href="/CreateArticle"><font face="FC active" size={4}>สร้างบทความใหม่</font></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/Matching"><font face="FC active" size={4}>หาวิชาที่เหมาะกับฉัน</font></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" onclick="document.getElementById('id01').style.display='block'" style={{width: 'auto'}}><font face="FC active" size={4}>เข้าสู่ระบบ</font></a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link search" id="search">
                    <i className="ti-search" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    </header> 
   

    );
  }
}

export default Navigation;