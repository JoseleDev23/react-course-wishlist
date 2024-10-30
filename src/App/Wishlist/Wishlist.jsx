import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Wishitem from '../Wishitem/Wishitem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <Wishitem
        text={text}
        done={done}
        id={`wish${i}`}
        key={text}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(Wishitem.proTypes)),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
