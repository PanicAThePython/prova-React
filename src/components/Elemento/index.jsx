import React from 'react';
import './style.css';
import Item from '../Item';

function Elemento({ value, level, position }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÉ';
  if (typeof value === 'string' && letters.match(value[0])) {
    position -= 1000;
    switch (level) {
      case 0:
        return (
          <Item position={position} level={level} value={value} />
        );
      case 1:
        return (
          <ul>
            <Item position={position} level={level} value={value} />
          </ul>
        );
      case 2:
        return (
          <ul><ul><Item position={position} level={level} value={value} /></ul></ul>
        );
      case 3:
        return (
          <ul><ul><ul><Item position={position} level={level} value={value} /></ul></ul></ul>
        );
      case 4:
        return (
          <ul><ul><ul><ul><Item position={position} level={level} value={value} /></ul></ul></ul></ul>
        );
      default:
        break;
    }
  } else {
    return (<ul></ul>);
  }
}

export default Elemento;
