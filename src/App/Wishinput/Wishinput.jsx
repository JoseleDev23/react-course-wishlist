import React from 'react';
import PropTypes from 'prop-types';

const Wishinput = ({ oneNewWish }) => {
  const [newWishText, setNewWishText] = React.useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wish</legend>
      <input
        className="wish-input__field"
        placeholder="New Wish"
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            oneNewWish({ done: false, text: newWishText });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};
Wishinput.propTypes = {
  oneNewWish: PropTypes.func,
};

Wishinput.defaultProps = {
  oneNewWish: () => {},
};

export default Wishinput;
