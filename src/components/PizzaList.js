import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  function compare_popularity_of_pizzas(pizza_a, pizza_b) {
    return pizza_b.bought - pizza_a.bought;
  }
  const pizza_sorted = [...pizzas].sort(compare_popularity_of_pizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <h3>The list of pizzas</h3>
      <h4>The number of pizzas in this list are {pizzas.length}:</h4>
      <ul>
        {pizza_sorted.map((pizza) => {
          return (
            <li key={pizza.id}>
              <strong>{pizza.name} </strong>
              Description: {pizza.description}
              Number of times bought: {pizza.bought}.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
