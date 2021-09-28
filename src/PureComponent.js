import { Fragment, PureComponent } from 'react';

class SimplePureComponent extends PureComponent {
  render() {
    return (
      <>
          <div>test</div>
          <p>Pure Component Example with Prop {this.props.count}</p>
      </>
    );
  }
}

export default SimplePureComponent;
