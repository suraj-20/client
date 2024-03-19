import React from 'react';
import './Home.css';
import Search from '../Layout/Search/Search';
import Featured from '../Featured/Featured';
import Testnomial from '../Layout/Testnomials/Testnomial';

const Home = () => {
  return (
  <>
    <div className='main-container'>
      <Search />

      <div className="heading">
        <h1>Most Popular Round-trip Flight Destinations</h1>
      </div>
      <div className="optionContainer">


        <div className="btn">
          <button>Europe</button>
        </div>

        <div className="btn">
          <button>South America</button>
        </div>

        <div className="btn">
          <button>South Asia</button>
        </div>

        <div className="btn">
          <button>Middle East</button>
        </div>

        <div className="btn">
          <button>Africa</button>
        </div>

        <div className="btn">
          <button>Asia & Oceania</button>
        </div>
      </div>
      <div className="homeContainer">
        <Featured />
      </div>
    </div>

<section>

  <Testnomial/>
</section>
  </>

  

  );
}

export default Home;
