import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  // loading
  if (loading) {
    return <Loading />;
  }

  // the cocktails array is empty
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria!
      </h2>
    );
  }

  // there are cocktails
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
