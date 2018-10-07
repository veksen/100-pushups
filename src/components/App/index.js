// @flow

import React, { Component, Fragment } from "react";
import { Wrapper, Title } from "./styles.js";

type State = {
  init: boolean,
  age: ?number
};
class App extends Component<null, State> {
  state = {
    age: undefined,
    init: false
  };

  reset = () => {
    this.setState({ init: false });
  };

  init = () => {
    if (this.state.age && this.state.age > 0) {
      this.setState({ init: true });
    }
  };

  handleChange = (event: KeyboardEvent, input: string) => {
    if (event.target && event.target.value) {
      const value = event.target.value;
      this.setState({ [input]: value });
    }
  };

  render() {
    return (
      <Wrapper>
        {this.state.init === false ? (
          <Fragment>
            <Title>Get started</Title>
            <label htmlFor="age">Age</label>
            <input id="age" value={this.state.age} onChange={e => this.handleChange(e, "age")} />

            <button onClick={this.init}>Let's go!</button>
          </Fragment>
        ) : (
          <div>
            You're {this.state.age} years old. This will impact your goals.{" "}
            <button onClick={this.reset}>Change?</button>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default App;
