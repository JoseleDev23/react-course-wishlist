import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Wishitem = ({ done, text, id, onDoneChange }) => {
  const [age, setAge] = React.useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((a) => a + 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(ageInterval);
    };
  }, [done]);

  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age <= 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <input
        id={id}
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor={id}> {text} </label>
    </li>
  );
};
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
