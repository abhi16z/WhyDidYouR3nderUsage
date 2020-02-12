import React from 'react';

export default class NoInlinePure extends React.PureComponent {
  render () {
    const {a} = this.props;
    console.log('%c NoInlinePure render', 'font-size: 1.5em; color: green');
    return (
      <div>NoInlinePure {a}</div>
    );
  }
}

NoInlinePure.whyDidYouRender = true;