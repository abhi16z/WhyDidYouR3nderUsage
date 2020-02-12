import React from 'react';

export default class InlinePure extends React.PureComponent {
  render () {
    const {a, style} = this.props;
    console.log('%c InlinePure render', 'font-size: 1.5em; color: red');
    return (
      <div style={style}>InlinePure {a}</div>
    );
  }
}

InlinePure.whyDidYouRender = true;