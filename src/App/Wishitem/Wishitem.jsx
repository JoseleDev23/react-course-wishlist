import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Wishitem = ({ done, text, id, onDoneChange }) => (
  <li
    className={classNames('wish-list__item', { 'wish-list__item--done': done })}
  >
    <input
      id={id}
      checked={done}
      onChange={(e) => onDoneChange(id, e.target.checked)}
      type="checkbox"
    />
    <label htmlFor={id}> {text} </label>
  </li>
);

Wishitem.prototype = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

Wishitem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default Wishitem;
