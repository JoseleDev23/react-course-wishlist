import React from 'react';
import './App.css';

import Wishinput from './Wishinput';
import WishList from './Wishlist';

const initialwishes = [
  { done: false, text: 'Travel to the monn' },
  { done: true, text: 'Learn Ract' },
  { done: true, text: 'Pay to the gym' },
  { done: false, text: 'Go to the gym' },
];

const App = () => {
  const [wishes, setWishes] = React.useState(initialwishes);
  return (
    <div className="app">
      <h1>My Wishlist APP</h1>
      <Wishinput oneNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button className="wish-clear" type="button">
        Archive Done
      </button>
    </div>
  );
};
export default App;
