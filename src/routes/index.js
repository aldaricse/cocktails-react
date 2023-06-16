import React from "react";
import { Switch } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import RouteApp from './RouteApp';

// containers
import Error404 from "@containers/Error404";
import Home from "@containers/home";
import DetailCocktail from "@containers/home/DetailCocktail";

function ReactRouter(){
	return (
    <HelmetProvider>
      <Switch>
        <RouteApp exact path="/" component={ Home } />
        <RouteApp exact path="/l/:slug_letter" component={ Home } />
        <RouteApp exact path="/:slug_code_cocktail" component={ DetailCocktail } />
        <RouteApp component={ Error404 } />
      </Switch>
    </HelmetProvider>
	);
}

export default ReactRouter;