import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;

// Rendering class dynamically
// using function method

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const formatCount = () => (count === 0 ? "zero" : count);

//   return (
//     <div>
//       <span className={getBadgeFunction(count)}>{formatCount()}</span>
//       <button className="btn btn-secondary btn-sm">Increment</button>
//     </div>
//   );
// };

// function getBadgeFunction(count) {
//   let classes = "badge m-2 badge-";
//   classes += count === 0 ? "warning" : "primary";
//   return classes;
// }
