import PureComponent from "./PureComponent";
import ClassComponent from "./ClassComponent";
import React from "react";

class Parent extends React.Component {
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
                <PureComponent count={10}/>
            </div>
          );
    }
    
  }
  export default Parent;