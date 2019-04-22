import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import '../components/create.css';

class FindArticle extends Component{

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
            <h3><font face="Fc active" size={17}>ค้นหาวิชาที่ต้องการ</font></h3></center>
            <form className="form_area" id="myForm"  method="post"> 
            {/* action="mail.html" */}
             
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
              
                  
                  </form>
                </div> 
               
                <div className="col-lg-12 text-center">
                <br></br>

                <br></br>

                <br></br>
                  <button className="primary-btn">ค้นหา</button>
                </div>
              </div>
        
        </section> 

        
       </div>
      );
    }
  
  }

  export default FindArticle;