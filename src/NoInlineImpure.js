import React from 'react';

export default class NoInlineImPure extends React.Component {
  render () {
    const {a} = this.props;
    console.log('%c NoInlineImPure render', 'font-size: 1.5em; color: olive');
    return (
      <div>NoInlineImPure {a}</div>
    );
  }
}

NoInlineImPure.whyDidYouRender = true;