import React from "react";
import Pagination from "react-js-pagination";
import { Helmet } from "react-helmet-async";
import ReactResizeDetector from 'react-resize-detector';

// redux
import { useSelector } from 'react-redux';

// components
import Loading from '@commons/Loading';
import SearchCocktails from '@application/cocktails/SearchCocktails';
import FilterFistLetterCocktails from '@application/cocktails/FilterFistLetterCocktails';
import CardCocktail from '@application/cocktails/CardCocktail';

function Home(){
  const { cocktails, isLoading } = useSelector(state => state.cocktails);
  const { drinks } = cocktails;
  const itemsCountPerPage = 10;
  const pageRangeDisplayed = 5;
  const [activePage, setActivePage] = React.useState(1);
  const [drinksPaged, setDrinksPaged] = React.useState([]);
  const [isMovil, setIsMovil] = React.useState(null);

  // useEffect drinks
  React.useEffect(()=>{
    setActivePage(1);
    handleDrinksPaged();
  },[drinks]);

  // useEffect activePage
  React.useEffect(()=>{
    handleDrinksPaged();
  },[activePage]);

  // drinks paged
  const handleDrinksPaged=()=>{
    let start= (activePage - 1) * itemsCountPerPage;
    let end = start + itemsCountPerPage;
    setDrinksPaged(drinks ? drinks.slice(start, end) : []);
  }

  // page change
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber);
    window.scrollTo(0, 0);
  }

  // onresize
  const onResize=(w)=>{
    setIsMovil((w < 992));
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Cocktails - Los mejores cócteles</title>
        <meta name="keywords" content={`cocktails, bebidas`}/>
        <meta name="description" content={`Puedes encontrar aqui variadades en cócteles`}/>
      </Helmet>

      <ReactResizeDetector handleWidth onResize={onResize} />
      <div className="home">
        <section className="section-search-banner bg-color3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <SearchCocktails/>
              </div>
            </div>

            {
              isMovil == null || isMovil ? null :
              <div className="row mt-2 xs-none d-lg-flex">
                <div className="col-12">
                  <FilterFistLetterCocktails/>
                </div>
              </div>
            }
          </div>
        </section>

        <section className="section-list-cocktails py-4">
          <div className="container">
            <div className="container-list-cocktails">
              {
                drinksPaged && !isLoading && drinksPaged.map(item=>(
                  <CardCocktail
                    key = {item.idDrink}
                    code = {item.idDrink}
                    name={item.strDrink}
                    category={item.strCategory}
                    urlImage={item.strDrinkThumb}
                    url={`/${item.idDrink}`}
                  />
                ))
              }

            </div>

            {
              isLoading ? <div className="mt-2 xs-center"><Loading/></div> : null
            }
            {
              !isLoading && !drinks && <span className="color2 mt-2 xs-center xs-block" style={{fontSize: '1rem'}}>Ningún cóctel encontrado</span>
            }
          
            {
              !isLoading && drinks &&
              <div className="pagination-cocktails mt-4">
                <Pagination
                  itemClass="page-item"
                  linkClass="page-link"
                  hideDisabled
                  activePage={activePage}
                  itemsCountPerPage={itemsCountPerPage}
                  totalItemsCount={drinks.length}
                  pageRangeDisplayed={pageRangeDisplayed}
                  onChange={handlePageChange}
                />
              </div> 
            }

            {
              isMovil == null || !isMovil ? null :
              <div className="row mt-4 lg-none">
                <div className="col-12">
                  <FilterFistLetterCocktails/>
                </div>
              </div>
            }

          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Home;
