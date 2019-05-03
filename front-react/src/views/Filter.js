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
      }, {
        name: 'Abductions', 
        minor: ['AB', 'BC', 'X'], 
      }
    ]

    const getMajorMethod = () => {
      const view = VIEWS.filter(({name}) => name === selectedView)[0]
      return (
        <div>

{/* <div className="col-lg-12 form_group">
<div className="col-75"> */}

          <select>
            {view.minor.map(m => <option>{m}</option>)}
          </select> </div>
        
        // </div> </div>
      )
    }
    return (
      <div>
        <select onChange={(e) => this.setState({selectedView: e.target.value})}>
          {VIEWS.map(({name}) => <option value={name}>{name}</option>)}
        </select>

        {getMajorMethod()}
      </div>
    )
  }
}

export default Filter;
