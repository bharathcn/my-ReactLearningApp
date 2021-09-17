import React from 'react';

class PureComponent extends React.PureComponent{
    render(){
       return <div><p>Pure Component Example with Prop {this.props.count}</p></div>
    }
}

export default PureComponent;