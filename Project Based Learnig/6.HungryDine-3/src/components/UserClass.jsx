import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " child constructor called");
    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " childDidMount called");
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 1500);
  }
  componentDidUpdate() {
    console.log(this.props.name + " is updated");
  }
  componentWillUnmount() {
    console.log(this.props.name + " has unmounted from dom");
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + " child render called");
    const { type, name, place, avatar_url } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="border-black border-2 border-solid p-4 m-4 w-100">
        <UserContext.Consumer>
          {(data) => <h1> hi {data.name} 👋</h1>}
        </UserContext.Consumer>
        <p>{type}</p>
        <img
          className="w-40 rounded-full p-4 mx-auto"
          src={avatar_url}
          alt=""
        />
        <h1>Name: {name}</h1>
        <h2>Place: {place}</h2>
        <h4
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count-1: {count1}
        </h4>
        <h4
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count-2: {count2}
        </h4>
      </div>
    );
  }
}

export default UserClass;
