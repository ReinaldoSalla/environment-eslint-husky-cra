/* eslint-disable no-console */
import React from 'react';

const func = (arg: boolean): boolean => {
  if (arg) {
    return true;
  }
  return false;
};

func(true);

// on this section, prettier and eslint would conflict if eslint uses this rule
// "implicit-arrow-linebreak": "error"

// const func2 = (arg: boolean): string => (
//   arg
//     ? 'arg is truessssssssssssssssssssssssssssssssssssssssssssssssssssssss'
//     : 'arg is not truexxxxxxxxxxxxxxxxxxxddddddd';
// )

// func2(true);

// eslint-disable-next-line
const App = () => (
  <div>
    {/* eslint-disable-next-line */}
    <div onClick={() => {}} />
    {/* eslint-disable-next-line */}
    <button type='button'>cliclk</button>
  </div>
);

export default App;
