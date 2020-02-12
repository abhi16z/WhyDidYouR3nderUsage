import React from 'react';
import InlinePure from './InlinePure';
import NoInlinePure from './NoInlinePure';
import NoInlineFunc from './NoInlineFunc';
import NoInlineImPure from './NoInlineImpure';
import NoInlineMemoFunc from './NoInlineMemoFunc';

export default class Test extends React.PureComponent {

  state = { a: 1 };

  componentDidMount() {
    this.setState({a: 2});
  }

  render() {
    const {val, setVal} = this.props;
    console.log('%c TestParent', 'font-size: 2em');
    return(
      <div>
        <div style={{color: 'red'}}>parent {val}</div> <br />
        <button onClick={() => setVal(val + 1)}>Click to check re-rendres</button> <br /> <br />
        <InlinePure a={this.state.a} style={{backgroundColor: 'red'}} />
        <NoInlineImPure a={this.state.a} />
        <NoInlineFunc a={this.state.a} />
        <NoInlinePure a={this.state.a} />
        <NoInlineMemoFunc a={this.state.a} />
      </div>
    );
  }
}

Test.whyDidYouRender = true;
