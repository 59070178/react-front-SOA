import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import StarRatingComponent from 'react-star-rating-component';
import '../components/create.css';
import Star from '../components/star'

class Matching extends Component{

  constructor( props){
    super (props)
      this.state = {show : false}

      this.showResult = this.showResult.bind(this)
   
    }

    showResult = () => {
      const { show } = this.state;
      this.setState ( { show : !show })
    }


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
          <h3><font face="Fc active" size={8}>ค้นหาวิชาที่เหมาะกับฉัน</font></h3></center>
          <form className="form_area" id="myForm"  method="post"> 
          {/* action="mail.html" */}
           
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีงานเดี่ยว / งานกลุ่ม</label>
                  </div>
                  <div className="col-75">

                  <Star />

                    {/* <select id="้homework" name="้homework">
                      <option value="้homework1">1</option>
                      <option value="้homework2">2</option>
                      <option value="้homework3">3</option>
                      <option value="้homework4">4</option>
                      <option value="้homework5">5</option>
                      <option value="้homework6">6</option>
                      <option value="้homework7">7</option>
                      <option value="้homework8">8</option>


                    </select> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">

                  <Star />

                    {/* <select id="midterm" name="midterm">
                    <option value="้midterm1">1</option>
                      <option value="้midterm2">2</option>
                      <option value="้midterm3">3</option>
                      <option value="้midterm4">4</option>
                      <option value="้midterm5">5</option>
                      <option value="้midterm6">6</option>
                      <option value="้midterm7">7</option>
                      <option value="้midterm8">8</option>
                    </select> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เช็คชื่อ / เข้าเรียน</label>
                  </div>
                  <div className="col-75">

                  <Star />

                    {/* <select id="check" name="check">
                    <option value="้check1">1</option>
                      <option value="้check2">2</option>
                      <option value="้check3">3</option>
                      <option value="้check4">4</option>
                      <option value="้check5">5</option>
                      <option value="้check6">6</option>
                      <option value="้check7">7</option>
                      <option value="้check8">8</option>
                    </select> */}
                  </div>
                </div>
            
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">สุ่มเกรด</label>
                  </div>
                  <div className="col-75">
                  <Star />

                    {/* <select id="random" name="random">
                    <option value="้random1">1</option>
                      <option value="้random2">2</option>
                      <option value="้random3">3</option>
                      <option value="้random4">4</option>
                      <option value="้random5">5</option>
                      <option value="้random6">6</option>
                      <option value="้random7">7</option>
                      <option value="้random8">8</option>
                    </select> */}
                  </div>
                </div>


                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ความยากของเนื้อหา</label>
                  </div>
                  <div className="col-75">
                  <Star />

                    {/* <select id="้hard" name="้hard">
                    <option value="้้hard1">1</option>
                      <option value="้้hard2">2</option>
                      <option value="้้hard3">3</option>
                      <option value="้้hard4">4</option>
                      <option value="้้hard5">5</option>
                      <option value="้้hard6">6</option>
                      <option value="้้hard7">7</option>
                      <option value="้้hard8">8</option>
                    </select> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ต้องแต่งตัวเรียบร้อย</label>
                  </div>
                  <div className="col-75">
                  <Star />

                    {/* <select id="dress" name="dress">
                    <option value="้dress1">1</option>
                      <option value="้dress2">2</option>
                      <option value="้dress3">3</option>
                      <option value="้dress4">4</option>
                      <option value="้dress5">5</option>
                      <option value="้dress6">6</option>
                      <option value="้dress7">7</option>
                      <option value="้dress8">8</option>
                    </select> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เรียนไม่เต็มเวลา</label>
                  </div>
                  <div className="col-75">
                  <Star />

                    {/* <select id="time" name="time">
                    <option value="้time1">1</option>
                      <option value="้time2">2</option>
                      <option value="้time3">3</option>
                      <option value="้time4">4</option>
                      <option value="้time5">5</option>
                      <option value="้time6">6</option>
                      <option value="้time7">7</option>
                      <option value="้time8">8</option>
                    </select> */}
                  </div>
                </div>
                
                </form>
              </div> 
             
              <div className="col-lg-12 ">
              <br></br>

              <br></br>

              <br></br>
                <button className="primary-btn" onClick={ this.showResult}>ค้นหา</button>
                <br></br>
      <br></br>
                { this.state.show && <Result />} 

              </div>
            </div>


            
      
      </section> 

      
     </div>
    );
  }

}

class Result extends Component {

  render(){
    return(

      

      <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			
				
				<div class="list-group-item">
					<h4 class="list-group-item-heading">
          วิชา SE

 					</h4>
           <div class="list-group-item">
           อ่านบทความเกี่ยวกับวิชานี้

           <p>
				<a class="btn" href="#">View details »</a>
			</p>
				</div>
        
				</div>
			</div>
	
	</div>
</div>
    )
  }
}

  export default Matching;