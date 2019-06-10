import React from 'react';

const Basket = (props) => (
  <section>
    <p>Shopping Cart</p>
    <ul>
      { props.items.map((item, index) => (
        <li key={index}>
          {item}
          <button>x</button>
        </li>
      )) }
    </ul>
  </section>
);

export default Basket;
