import { SEARCH_COCKTAILS, FIRST_LETTER_COCKTAILS, INIT_LOADING, SHOW_ONE_COCKTAIL } from '@actions/types';

// cada reducer tiene su propio state

const initialState = {
  cocktails: [],
  isLoading: false,
  cocktail: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case INIT_LOADING:
      return{
        ...state,
        isLoading: true
      }
    case SEARCH_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
        isLoading: false
      }
    case FIRST_LETTER_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
        isLoading: false
      }
    case SHOW_ONE_COCKTAIL:
      return {
        ...state,
        cocktail: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}