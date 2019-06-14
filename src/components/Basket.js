import React from 'react';

class Basket extends React.Component {
  constructor(props) {
      super(props);

  this.state = {
       basketItems: [],
      };
  }

  render() {
      return (
  <section>
    <p>Shopping Cart</p>
    <ul>
      {this.props.phoneId.map((phoneId, i) => (
        <li key={i}>{phoneId}
    <button
    onClick={() => { this.props.deleteFromBasket(i)
            }}> x </button>
        </li>
      )) }
    </ul>
  </section>
    );
  };
}

export default Basket;
