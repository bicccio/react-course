import React from 'react';

var App = React.createElement(
  'div',
  {},
  React.createElement(
    'h1',
    {
      style: { background: '#efefef', padding: '10px' },
      onClick: function() {
        alert('miao');
      }
    },
    'Corso React'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      React.createElement('h2', null, 'Giorno 1'),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement('a', { target: 'blank', href: 'https://reactjs.org/' }, 'React')
        )
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement('h2', null, 'Giorno 2'),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement('a', { target: 'blank', href: 'https://redux.js.org/' }, 'Redux')
        )
      )
    )
  )
);

export default App;
