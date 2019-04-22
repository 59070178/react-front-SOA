import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import '../components/create.css';

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


<br></br>
     <br></br>

     <br></br>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     <br></br>

     <br></br>

     <br></br>
<section className="Add">
        <div className="container">
          <div className="register_form">
          <center>
            <h3><font face="Fc active" size={17}>สร้างบทความใหม่</font></h3></center>
            <form className="form_area" id="myForm"  method="post"> 
            {/* action="mail.html" */}
              <div className="row">
                <div className="col-lg-12 form_group">
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">ชื่อบทความ</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="firstname" placeholder="ชื่อบทความของคุณ...." />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">หมวดหมู่วิชา</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                        <option value="วิชาเลือกเสรี">วิชาเลือกเสรี</option>
                        <option value="วิชาเลือกหมวดหมู่มนุษย์">วิชาเลือกหมวดหมู่มนุษย์</option>
                        <option value="วิชาเลือกหมวดหมู่สังคม">วิชาเลือกหมวดหมู่สังคม</option>
                        <option value="วิชาเลือกหมวดหมู่ภาษา">วิชาเลือกหมวดหมู่ภาษา</option>

                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">ชื่อวิชา</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                        <option value="Individual Study">Individual Study</option>
                        <option value="Happiness Skills">Happiness Skills</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">รายละเอียดวิชา</label>
                    </div>
                    <div className="col-75">

                    <textarea rows = "5" cols = "50" name = "description" placeholder="รายละเอียดวิชาของคุณ....">
         </textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">เกรดที่ได้</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button className="primary-btn">ตกลง</button>
                </div>
              </div>
            </form>
          </div>
        </div></section>

        </div>
        
      );
    }
  
  }

  export default CreateArticle;