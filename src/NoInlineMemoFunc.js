import React from 'react';

function NoInlineMemoFunc(props) {
  const {a} = props;
  console.log('%c NoInlineMemoFunc render', 'font-size: 1.5em; color: lightgreen');
  return (
    <div> NoInlineMemoFunc {a}</div>
  );
}

NoInlineMemoFunc.whyDidYouRender = true;

export default React.memo(NoInlineMemoFunc);