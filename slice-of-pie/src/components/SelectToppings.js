import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const ToppingCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    padding: 3px;
    align-items: center;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function piesWithTopping(pies) {
  const counts = pies
    .map((pie) => pie.toppings)
    .flat()
    .reduce((accumulator, topping) => {
      const toppingExists = accumulator[topping.id];
      if (toppingExists) {
        toppingExists.count += 1;
      } else {
        accumulator[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }

      return accumulator;
    }, {});
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export const SelectToppings = () => {
  const { toppings, pies } = useStaticQuery(graphql`
    query {
      pies: allSanityPie {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  console.clear();
  console.log({
    toppings,
    pies,
  });

  const toppingsWithCounts = piesWithTopping(pies.nodes);

  console.log(toppingsWithCounts);

  // Get a list of all the pizzas with their toppings
  // Loop over the list of toppings
  return (
    <ToppingCard>
      {toppingsWithCounts.map((topping) => (
        <Link
          to={`/topping/${topping.name.replace(" ", "-")}`}
          key={topping.id}
        >
          <span>{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingCard>
  );
};
