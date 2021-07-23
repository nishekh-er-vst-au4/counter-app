import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
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
