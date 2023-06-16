import React from "react";
import queryString  from "query-string";
import { useLocation, useParams } from "react-router-dom";
import history from "@scripts/history";

// redux
import { useDispatch } from 'react-redux';
import { searchCocktails } from '@actions/cocktailsActions';

function SearchCocktails(){
  const dispatch = useDispatch();
  const { slug_letter } = useParams();
  const location = useLocation();
  const [search, setSearch] = React.useState('');

  // useeffect location
  React.useEffect(()=>{
    const parsed = queryString.parse(location.search);
    const searchString = parsed.s;
    const letterString = slug_letter;

    if(letterString) return;

    dispatch(searchCocktails(!searchString ? '': searchString));
    setSearch(searchString);
  },[location]);

  const handleChangeText=(e)=>{
    let key = e.charCode;
    if(key != 13) return;
  
    history.push(`/?s=${e.target.value}`);
  }

  return(
    <div className="container-search-input search-input-cocktails">
      <input 
        type="text" 
        placeholder="¿Qué cóctel estás buscando?" 
        title="Presiona ENTER para buscar"
        className="form-control search-input-text" 
        defaultValue={search}
        onKeyPress={handleChangeText}>
      </input>
      <i className="fa fa-search search-input-icon"></i>
    </div>
  )
}

export default SearchCocktails;