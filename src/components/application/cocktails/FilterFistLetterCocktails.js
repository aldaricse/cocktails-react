import React from "react";
import { NavLink, useParams } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { firstLetterCocktails } from '@actions/cocktailsActions';

function FilterFistLetterCocktails(){
  const dispatch = useDispatch();
  let { slug_letter } = useParams();
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // useeffect slug_letter
  React.useEffect(()=>{
    if(!slug_letter) return;
    
    dispatch(firstLetterCocktails(slug_letter));
  },[slug_letter]);

  return(
    <div className="container-letters letters-cocktails">
      <ul className="dictionary">
        {
          letters && letters.map((letter,i)=> <li key={i}><NavLink className="xs-uppercase" exact={true} to={`/l/${letter}`}>{letter}</NavLink></li>)
        }
      </ul>
    </div>
  )
}

export default FilterFistLetterCocktails;