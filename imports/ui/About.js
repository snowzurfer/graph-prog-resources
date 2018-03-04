import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.onMainClicked = this.onMainClicked.bind(this);
  }

  onMainClicked() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>About</h1>

        <button onClick={this.onMainClicked}>Main page</button>
      </div>
    );
  }
}
