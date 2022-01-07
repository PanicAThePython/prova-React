import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { isDisplay, isChecked, indeterminatingDads } from '../../assets/eventFunctions';
import './style.css';

const inputs = document.getElementsByTagName('input');

let pos;
let lev;

const clicked = (e) => {
  pos = e.target.getAttribute('data-position');
  lev = e.target.getAttribute('data-level');
  const initialPosition = pos;

  if (inputs[pos].checked) {
    isChecked(true, pos, lev);
    indeterminatingDads(true, initialPosition, lev);
  } else {
    isChecked(false, pos, lev);
    indeterminatingDads(false, initialPosition, lev);
  }
};

const labels = document.getElementsByTagName('label');

const hideAndShow = (e) => {
  pos = e.target.getAttribute('data-position');
  lev = e.target.getAttribute('data-level');

  if (labels[pos].getAttribute('data-hiding') === 'false') {
    isDisplay('none', pos, lev);
    e.target.setAttribute('data-hiding', true);
  } else {
    isDisplay('list-item', pos, lev);
    e.target.setAttribute('data-hiding', false);
  }
};

export default class Item extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" onClick={clicked} data-position={this.props.position} data-level={this.props.level} name={this.props.value} />
        <label
          htmlFor={this.props.value}
          onDoubleClick={hideAndShow}
          data-hiding={false}
          data-position={this.props.position}
          data-level={this.props.level}
        >
          {this.props.value+''}
        </label>
      </li>
    );
  }
}
