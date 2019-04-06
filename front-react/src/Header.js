import React, { Component } from 'react';

class Header extends Component{

  constructor(){ // if want to use state. create this
    super();
    this.state={
      name : "Un Like",
      count : 0
    };


  }

    render(){

    //   setTimeout(()=> {
    //     this.setState({name:"Like"});
    // },1000);  // 1 sec then change

  //   setInterval(()=> {
  //     this.setState({count:this.state.count + 1});
  // },100);


      return(
  
        <div>
         <h1>So Sleepy</h1> 
         <h2>{this.state.name}</h2>
         <h2>{this.state.count}</h2>
         <h1><a href="/">Home</a></h1>

        </div>
  
      );
    }
  }

  export default Header;