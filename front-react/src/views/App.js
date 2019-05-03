import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'



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

<header><a href="/" ><img src={logo} alt="Logo"/> </a> </header>
        <nav>
          <ul>
            <li><a href="/" className="active" >หน้าแรก</a></li>
            <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>

            <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>

            <li><a href="/FindArticle">ค้นหาบทความ</a></li>

            <li><a href="/Login">เข้าสู่ระบบ</a></li>

            

          </ul>
        </nav>
        <section className="sec1" />


        <h1>Hello World</h1>

        <h1><a href="/FindArticle">Find Article</a></h1>

        <h1><a href="/Matching">Matching</a></h1>

        <h1><a href="/CreateArticle">Create Article</a></h1>
        <h1><a href="/star">Star</a></h1>



        <h1>{this.state.message}</h1><br/>
    
      


        <button type="button" class="btn btn-outline-primary" onClick={this.changeMessage}>{this.state.message}</button><br/>
        
         
          </div>

   
     
        

        //  <h1>{this.state.data}</h1>
        //  <button onClick={this.insertData} >Insert</button><br/>
        //  <input type="text" onChange={this.onChange.bind(this)}/>
        //  <h1>Welcome : {this.state.type}</h1> 
        


    
    );
  }
}


export default App;
