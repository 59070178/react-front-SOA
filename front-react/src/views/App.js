import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import image from "../assets/image/home-banner.jpg";



class App extends Component {

  constructor(){
    super();
    this.state={
        data:[],
        isOpen: false,
        message:"Un Like",
        type:""
    };
    this.changeMessage=this.changeMessage.bind(this);

    this.toggleCollapse=this.toggleCollapse.bind(this);
    // this.insertData=this.insertData.bind(this);
  }
 
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
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

<Navigation />

<img src={image} />


        <h1>Hello World</h1>
        <h1><a href="/Content">Content</a></h1>


        <h1><a href="/FindArticle">Find Article</a></h1>

        <h1><a href="/Matching">Matching</a></h1>

        <h1><a href="/CreateArticle">Create Article</a></h1>


        <h1>{this.state.message}</h1><br/>
    
      


        <button type="button" class="btn btn-outline-primary" onClick={this.changeMessage}>{this.state.message}</button><br/>
        
         
          </div>


//<Header />
        //  <Content title = "Practice " name = "Aew" />        
     
        

        //  <h1>{this.state.data}</h1>
        //  <button onClick={this.insertData} >Insert</button><br/>
        //  <input type="text" onChange={this.onChange.bind(this)}/>
        //  <h1>Welcome : {this.state.type}</h1> 
        


    
    );
  }
}


export default App;
