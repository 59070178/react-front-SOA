import React from 'react';


class Filter extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'Cheating'
    }
  }
  
  render() {
    const { selectedView } = this.state
    const VIEWS = [
      {
        name: 'Cheating', 
        minor: ['a', 'b'], 
        // method: ['apple', 'orange']
      }, {
        name: 'Abductions', 
        minor: ['AB', 'BC', 'X'], 
        // method: ['cat', 'dog']
      }
    ]

    const getMajorMethod = () => {
      const view = VIEWS.filter(({name}) => name === selectedView)[0]
      return (
        <div>
          <select>
            {view.minor.map(m => <option>{m}</option>)}
          </select>
       
        </div>
      )
    }
    return (
<div>

<section className="Add">
        <div className="container">
          <div className="register_form">
            <form className="form_area" id="myForm"> 
              <div className="row">
                <div className="col-lg-12 form_group">
                  
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">หมวดหมู่วิชา</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                        <option value="วิชาเลือกเสรี">วิชาเลือกเสรี</option>
                      </select>
                    </div>
                  </div>
                   {/* <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">ชื่อวิชา</label>
                    </div> 
                     <div className="col-75">
                      <select id="subject" name="subject">
                        
                      </select>
                    </div> 
                   </div>  */}
                 
                </div>
             
              </div>

            </form>

          </div>
        </div>
                
        </section>
      

        </div>
    )
  }
}

export default Filter;
