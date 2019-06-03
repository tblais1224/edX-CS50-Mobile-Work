import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

//Component knows to render the props to the class instance so use this.props.count if you use propslike in props example
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    //this will only increase state by one because setState() runs asynchronously

    //basically saying:  
    // merge {count: 0}, {count: this.state.count + 1}, {count: this.state.count + 1}

    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(this.state.count)
  }

  render() {
    return (
      <div style={styles}>
        <div>
          {/* arrow notation automatically binds this */}
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
