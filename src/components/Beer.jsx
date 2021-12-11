import './beer.css';
import {useNavigate} from 'react-router-dom';

const Beer = ({
  id,
  abv,
  description,
  ebc,
  food_pairing,
  ibu,
  image,
  name,
  tagline
}) => {
  let navigate = useNavigate();

  return (
    <div className='beer-container'>
      <div className="beer-container-left">
        <img src={image} alt="beer bottle" />
      </div>
      <div className="beer-container-right">
        <span>{name}</span>
        {/* <p>{description}</p> */}
        <p>{tagline}</p>
        {/* <p>ABV: {abv}%</p>
        <ul>Pairs well with:
          {food_pairing.map((food) => {
            return <li>{food}</li>
          })}
        </ul> */}
        <button onClick={() => {
          navigate(`/BeerPage/${id}`)
        }}>More Info</button>
      </div>
    </div>
  )
}

export default Beer
