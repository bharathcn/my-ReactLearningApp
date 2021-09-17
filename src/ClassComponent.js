import React from 'react';

class ClassComponent extends React.Component {
  render(){
    return React.createElement("div",null, "Class Component Example with Prop",this.props.count," ") ;
  }
}
export default ClassComponent;