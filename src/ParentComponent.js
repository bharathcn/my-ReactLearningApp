import SimplePureComponent from "./PureComponent";
import ClassComponent from "./ClassComponent";
import {Component} from "react";

class Parent extends Component {
    //  generateRandomNumbers=()=>{
    //  return Math.random().toFixed(2);
    //}
    componentDidMount(){
        setInterval(()=>console.log('parent'),10000)
    }
    render(){
        return (
            <div>
                <ClassComponent count={10} />
                <SimplePureComponent count={10}/>
            </div>
          );
    }
    
  }
  export default Parent;