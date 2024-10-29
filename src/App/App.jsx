import React from "react";
import classNames from 'classnames';
import './App.css';

const wishes = [
    {done:false , text: 'Travel to the monn'},
    {done:true , text: 'Learn Ract'},
    {done:true , text: 'Pay to the gym'},
    {done:false, text: 'Go to the gym'},

]

const App = () => {
    return (
        <div className="app">
            <h1>My Wishlist APP</h1>
            <fieldset className="wish-input">
                <legend className="wish-input__label">New Wish</legend>
                <input className="wish-input__field" placeholder="New Wish" />
            </fieldset>
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
            <button className="wish-clear" type="button">Archive Done</button>
        </div>
    );
}
export default App;