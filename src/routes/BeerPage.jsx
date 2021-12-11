import './styles/beerPage.css';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import BackgroundImg from '../images/beer.jpg';

const BeerPage = () => {
  let {id} = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.punkapi.com/v2/beers/${id}`).then((response) => {
      console.log(response.data[0]);
      setBeer(response.data[0]);
    })
  }, [])

  if (beer) {
    return (
      <div
        className="beerPage-container"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="beerPage-left">
          <img src={beer.image_url || 'https://images.punkapi.com/v2/200.png'} alt="photo of beer" className="beerPage-image" />
        </div>
        <div className="beerPage-right">
          <div className="beerPage-info">
          <h1>{beer.name}</h1>
          <div className="beerPage-data">
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">ABV: </h3>
              <h3 className="beerPage-rowData">{beer.abv}%</h3>
            </div>
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">EBC: </h3>
              <h3 className="beerPage-rowData">
                {beer.ebc}
              </h3>
            </div>
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">IBU: </h3>
              <h3 className="beerPage-rowData">
                {beer.ibu}
              </h3>
            </div>
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">Description: </h3>
              <h3 className="beerPage-rowData">
                {beer.description}
              </h3>
            </div>
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">Tagline: </h3>
              <h3 className="beerPage-rowData">
                {beer.tagline}
              </h3>
            </div>
            <div className="beerPage-row">
              <h3 className="beerPage-rowHeader">Pairs well with: </h3>
              <h3 className="beerPage-rowData">
                <ul>
                {beer.food_pairing.map((food) => {
                  return <li>{food}</li>
                })}
                </ul>
              </h3>
            </div>
          </div>
          <Link to="/" style={{textDecoration: 'none', backgroundColor: 'transparent'}}>
            <div className="beerPage-routeButton">Go back</div>
          </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default BeerPage
