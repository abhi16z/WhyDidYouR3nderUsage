import React from 'react';
import Test from './TestParent';

function App() {
  const [val, setVal] = React.useState(0);

  return (
    <Test val={val} setVal={setVal} />
  );
}

export default App;
