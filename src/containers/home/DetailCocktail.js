import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// redux
import { useSelector, useDispatch } from 'react-redux';
import { showOneCocktail } from '@actions/cocktailsActions';

// containers
import Error404 from "@containers/Error404";

// components
import Preloader from "@commons/Preloader";

function DetailCocktail() {
  const { slug_code_cocktail } = useParams();
  const { cocktail, isLoading } = useSelector(state => state.cocktails);
  const dispatch = useDispatch();
  const [detailCocktail, setDetailCocktail] = React.useState(null);
  
  // useeffect slug_code_cocktail
  useEffect(()=>{
    if(!slug_code_cocktail) return;

    dispatch(showOneCocktail(slug_code_cocktail));
  },[slug_code_cocktail]);

  // useeffect cocktail
  React.useEffect(()=>{
    if(isLoading) return;

    setDetailCocktail(cocktail && cocktail.drinks ? cocktail.drinks[0] : null);
  },[cocktail]);

  const renderListIngredients=(detail)=>{
    let render= [];
    for(let i = 1; i <= 15; i++){
      let ingredient= detail[`strIngredient${i}`];
      if(ingredient){
        let measure= detail[`strMeasure${i}`];
        render.push(<li key={i}>{ingredient} { measure ? `- ${measure}`: `` }</li>);
      }
    }

    return render;
  }

  if (isLoading) return <Preloader/>;

  if(cocktail == "" || (cocktail && !cocktail.drinks)) return <Error404/>;

	return (
    !detailCocktail ? <Preloader/> :
    <React.Fragment>
      <Helmet>
          <title>{detailCocktail.strDrink} - {detailCocktail.strInstructions}</title>
          <meta name="keywords" content={`${detailCocktail.strDrink}`}/>
          <meta name="description" content={`${detailCocktail.strInstructions}`}/>
      </Helmet>

      <section className="detail-cocktail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={detailCocktail.strDrinkThumb} alt={detailCocktail.strDrink}/>
            </div>
            <div className="col-md-6">
              <div className="content-detail-cocktail mt-4 mt-md-0">
                <h2>{detailCocktail.strDrink}</h2>
                <h4 className="default">{detailCocktail.strCategory}</h4>

                <div className="mt-4">
                  <span className="xs-block color2">Alcoholica:</span>
                  <p>{detailCocktail.strAlcoholic}</p>
                </div>

                <div className="mt-4">
                  <span className="xs-block color2">Vaso en que se sirve:</span>
                  <p>{detailCocktail.strGlass}</p>
                </div>

                <div className="mt-4">
                  <span className="xs-block color2">Instrucciones:</span>
                  <p>{detailCocktail.strInstructions}</p>
                </div>

                <div className="mt-4">
                  <span className="xs-block color2">Ingredientes:</span>
                  {
                    <ul className="style-list dot">
                      { renderListIngredients(detailCocktail) }
                    </ul>
                  }
                </div>

                <div className="mt-4">
                  <span className="xs-block color2">Última fecha de modificación:</span>
                  <p>{detailCocktail.dateModified}</p>
                </div>

              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 xs-center">
              <Link className="btn btn--link color2-force" to="/">Regresar</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
	)
}

export default DetailCocktail;
