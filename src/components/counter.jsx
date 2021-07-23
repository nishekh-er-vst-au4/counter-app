import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
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
