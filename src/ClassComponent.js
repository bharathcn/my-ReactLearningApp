import {Component, createElement} from 'react';

class ClassComponent extends Component {
  render(){
    return createElement("div",null, "Class Component Example with Prop",this.props.count," ") ;
  }
}
export default ClassComponent;