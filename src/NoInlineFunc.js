import React from 'react';

export default function NoInlineFunc(props) {
  const {a} = props;
  console.log('%c NoInlineFunc render', 'font-size: 1.5em; color: blue');
  return (
    <div> NoInlineFunc {a}</div>
  );
}

NoInlineFunc.whyDidYouRender = true;