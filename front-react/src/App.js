import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Button , Nav ,NavDropdown } from 'react-bootstrap'


class App extends Component {

  constructor(){
    super();
    this.state={
        data:[],
        message:"Un Like",
        type:""
    };
    this.changeMessage=this.changeMessage.bind(this);
    // this.insertData=this.insertData.bind(this);
  }

  
  changeMessage(){
      this.setState({message:"Like"});
  }
  // insertData(){
  //   var item = "React";
  //   var myArray = this.state.data;
  //   myArray.push(item);

  //   this.setState({data:myArray});
  // }
  // onChange(event){
  //   this.setState({type:event.target.value})
  // }
  
  render() {

    // var mystyle={
    //   fontSize:100,
    //   color:'#ff0000'
    // }
    return (
      <div>

<Nav variant="pills" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            NavLink 1 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            NavLink 3 content
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>


         

        <h1>Hello World</h1>
        <h1><a href="/Header">Header</a></h1>
        <h1><a href="/Content">Content</a></h1>
        <h1><a href="/Footer">Footer</a></h1>
        <h1><a href="/">Home</a></h1>

        <h1>{this.state.message}</h1><br/>
    
      


        <button type="button" class="btn btn-outline-primary" onClick={this.changeMessage}>{this.state.message}</button><br/>

        <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>

         
          </div>


        // <Header />
        //  <Content title = "Practice " name = "Aew" />
        // <Footer />
        
     
        

        //  <h1>{this.state.data}</h1>
        //  <button onClick={this.insertData} >Insert</button><br/>
        //  <input type="text" onChange={this.onChange.bind(this)}/>
        //  <h1>Welcome : {this.state.type}</h1> 
        


    
    );
  }
}


export default App;
