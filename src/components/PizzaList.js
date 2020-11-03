import React from "react";
import { useDispatch, useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas;
};

const selectFavourites = (reduxState) => {
  return reduxState.user.favourites;
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const favourite = useSelector(selectFavourites);
  function compare_popularity_of_pizzas(pizza_a, pizza_b) {
    return pizza_b.bought - pizza_a.bought;
  }
  const pizza_sorted = [...pizzas].sort(compare_popularity_of_pizzas);

  //   console.log("what is user", user);
  //   console.log("what is user.favourites", user.favourites);
  //   console.log("what is favourite", favourite);
  //   console.log("what is pizzas", [...pizzas]);

  //   const pizza_favourites = [...pizzas].map((pizza) => {
  //     if (
  //       pizza.id ===
  //       favourite.map((favouritePizza) => {
  //         return favouritePizza;
  //       })
  //     ) {
  //       return "♥";
  //     } else {
  //       return "♡";
  //     }
  //   });

  //   console.log("what is pizza favourites", pizza_favourites);

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
              <button
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_FAVORITE_PIZZA",
                    payload: pizza.id,
                  });
                }}
              >
                {favourite.includes(pizza.id) ? "♥" : "♡"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
