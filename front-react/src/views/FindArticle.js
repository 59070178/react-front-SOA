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
                      <option value="วิชาเลือกหมวดหมู่ภาษา">1. วิชาเลือกกลุ่มวิชาภาษา</option>
                      <option value="วิชาเลือกหมวดหมู่มนุษย์">2. วิชาเลือกกลุ่มวิชามนุษย์</option>
                        <option value="วิชาเลือกหมวดหมู่สังคม">3. วิชาเลือกกลุ่มวิชาสังคม</option>
                        <option value="วิชาศึกษาทั่วไปกลุ่มวิชาวิทยาศาสตร์กับคณิตศาสตร์">4. วิชาศึกษาทั่วไปกลุ่มวิชาวิทยาศาสตร์กับคณิตศาสตร์</option>
                        <option value="วิชาเลือกทางสาขา">5. วิชาเลือกทางสาขา</option>
                        <option value="วิชาเลือกเสรี">6. วิชาเลือกเสรี</option>
                        <option value="กลุ่มเวลาเรียนของรายวิชา">7. กลุ่มเวลาเรียนของรายวิชา</option>
                        <option value="วิชาภาษาอังกฤษ">8. วิชาภาษาอังกฤษ</option>
                        <option value="วิชาวิทยาศาสตร์กับคณิตศาสตร์">9. วิชาวิทยาศาสตร์กับคณิตศาสตร์</option>

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