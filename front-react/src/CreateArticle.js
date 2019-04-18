import React, { Component } from 'react';
import Navigation from './Navigation';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CreateArticle extends Component{

  constructor(){

    var screenWidth = window.innerWidth; 
    super();
    this.state = {
      
      btnWidth: {
         width: screenWidth * 0.5
      }
 }
    };

    render(){
      return(
  

        <div>
<Navigation />

        <h1 center><center><br></br><br>
        
        </br>สร้างบทความใหม่</center> </h1> 

        
        <center>
        <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>ชื่อบทความ</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="ชื่อบทความของคุณ....." />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>หมวดหมู่วิชา</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>ชื่อวิชา</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" placeholder="รายละเอียดวิชาของคุณ....."/>
          </Col>
        </FormGroup>
        
      </Form>

      <FormGroup row>
          <Label for="exampleSelect" sm={2}>เกรดที่ได้</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" >
            <option>A</option>
            <option>B+</option>
            <option>B</option>
            <option>C+</option>
            <option>C</option>
            <option>D+</option>
            <option>D</option>
            <option>F</option>

          </Input>
          </Col>
        </FormGroup>

        <Button color="warning" style={this.state.btnWidth}>ตกลง</Button>{' '}
        </center>
     
       </div>
      );
    }
  
  }

  export default CreateArticle;