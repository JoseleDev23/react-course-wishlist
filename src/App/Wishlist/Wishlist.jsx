import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";

const WishList = ({wishes}) => (
<ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
        <li key={i} className={classNames(`wish-list__item`,{'wish-list__item--done' :done})}>
            <label htmlFor={`wish${i}`}>
                <input id={`wish${i}`} type="checkbox" checked={done} />
                {text}
            </label>
        </li>
    ))}
</ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

WishList.defaultProps = {
    wishes: [],
}

export default WishList;