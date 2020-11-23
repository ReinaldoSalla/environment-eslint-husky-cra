import React from 'react';

const func = (arg: boolean): boolean => {
  if (arg) {
    return true;
  }
  return false;
};

func(true);

// eslint-disable-next-line
const App = () => (
  <div>
    {/* eslint-disable-next-line */}
    <div onClick={() => {}} />
  </div>
);

export default App;
