import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
  React.createElement('div', {},
    React.createElement('h1', {}, 'An Awesome Person'),
      React.createElement('ul', {},
      [
        React.createElement('li', {className: 'JavaScript'}, 'JavaScript'),
        React.createElement('li', {className: 'React'}, 'React'),
        React.createElement('li', {className: 'Movies'}, 'Movies'),
        React.createElement('li', {className: 'Ice cream'}, 'Ice Cream'),
      ]
    )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
