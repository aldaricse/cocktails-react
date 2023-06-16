import React from "react";
import { Link } from "react-router-dom";

function CardCocktail({ name, category, urlImage, code, url='#' }){
  return(
    <Link to={url} className="card-cocktail">
      <img src={urlImage} alt={name} className="bg-image img-cover card-cocktail__image"/>

      <div className="card-cocktail__info">
        <span className="card-cocktail__code">{code}</span>
        <span className="card-cocktail__category">{category}</span>
        <span className="card-cocktail__name xs-bold">{name}</span>
      </div>
    </Link>
  )
}

export default CardCocktail;