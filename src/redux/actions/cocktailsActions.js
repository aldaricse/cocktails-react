import axios from 'axios';
import { INIT_LOADING, SEARCH_COCKTAILS, FIRST_LETTER_COCKTAILS, SHOW_ONE_COCKTAIL } from './types';
import { urlAPI } from '@scripts/config';

const urlCocktails= `${urlAPI}`;

const initLoading = (dispatch) => dispatch({ type: INIT_LOADING });

export const searchCocktails = (s) => async dispatch => {
  initLoading(dispatch);
  const response = await axios.get(`${urlCocktails}/search.php?s=${s}`);
  dispatch({
    type: SEARCH_COCKTAILS,
    payload: response.data
  })
}

export const firstLetterCocktails = (l) => async dispatch => {
  initLoading(dispatch);
  const response = await axios.get(`${urlCocktails}/search.php?f=${l}`);
  dispatch({
    type: FIRST_LETTER_COCKTAILS,
    payload: response.data
  })
}

export const showOneCocktail = id => async dispatch => {
  initLoading(dispatch);
  const response = await axios.get(`${urlCocktails}/lookup.php?i=${id}`);
  dispatch({
    type: SHOW_ONE_COCKTAIL,
    payload: response.data
  })
}