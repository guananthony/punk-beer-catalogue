import { useState, useEffect } from 'react';
import '../App.css';
import Beer from '../components/Beer';
import Refresh from '../images/refresh.png';
import Search from '../images/search.png';
import Axios from 'axios';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    refreshPage()
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchForBeer = () => {
    if (!searchTerm) {
      return;
    }

    setIsLoading(true);
    Axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
    .then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setBeers(response.data);
    });
    setSearchTerm('');
  }

  const refreshPage = () => {
    let randomNumber = Math.floor(Math.random() * 17) + 1;
    Axios.get(`https://api.punkapi.com/v2/beers?page=${randomNumber}&per_page=20`).then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setBeers(response.data)
    })
  }

  return (
    <div className='container'>
      <div className="header-container">
        <h1>A Selection of Curated Beers</h1>
        <h2>Find out more about a beer, search for one, or refresh for a random assortment</h2>
        <div className="search-container">
          <input type="text" placeholder="Enter name of beer here.." value={searchTerm} onChange={handleSearch} />
          <img src={Search} alt="refresh button" onClick={searchForBeer}/>
          <img src={Refresh} alt="refresh button" onClick={refreshPage}/>
        </div>
      </div>
      <div className="beers-container">
        {isLoading && <h1 className='loading-msg'>Beers Being Poured..</h1>}
        {beers.length === 0 ? <h1>No beers found</h1> : beers.map((beer, index) => {
          return (
            <Beer
              key={index}
              id={beer.id}
              abv={beer.abv}
              description={beer.description}
              ebc={beer.ebc}
              food_pairing={beer.food_pairing}
              ibu={beer.ibu}
              image={beer.image_url ? beer.image_url : 'https://images.punkapi.com/v2/200.png'}
              name={beer.name}
              tagline={beer.tagline}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
