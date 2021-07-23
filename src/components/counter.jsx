import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //do something
    }
  }
  render() {
    console.log("Counter-Rendered");
    const { onIncrement, onDelete, counter, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm "
            onClick={() => onDelete(counter.id)}
          >
            X
          </button>
        </div>
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

  // disableDecrement() {
  //   const { value } = this.props.counter;
  //   return value === 0 ? true : false;
  // }
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
