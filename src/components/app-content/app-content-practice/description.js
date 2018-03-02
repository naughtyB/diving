import React from 'react';
import './description.css';

export class Description extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const data = this.props.data;
    const dataNode = data.map((item,index) => {
      return (
        <div className="app-content-practice-card-description-each" key={index}>
          <h4 className="app-content-practice-card-title">{item.title}</h4>
          <p className="app-content-practice-card-content">{item.content}</p>
        </div>
      )
    })
    return (
      <div className="app-content-practice-card-description" style={this.props.style}>
        {dataNode}
      </div>    
    )        
  }
}

export default Description;