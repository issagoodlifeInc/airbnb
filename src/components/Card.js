import star from '../images/star.png';

export default function Card(props) {

  let situationText
  if (props.data.openSpots === 0){
    situationText = "Sold out"
  }else if(props.data.location === "Online"){
    situationText= "Online"
  }

  const src = require(`../images/${props.data.coverImg}`);
    return(
            <div className="card">
                <div className="card--situation">
              {situationText && <h5 className="card--situation_text">{situationText}</h5>}
                </div>
                <img src= {src} className="card-img" alt={props.data.coverImg.slice(0, -4)}/>
                <p className="card--stars">
                <img src={star} alt="star"/>
                {props.data.stats.rating} <span className='no_stars'>({props.data.stats.reviewCount}) • {props.data.location} </span></p>
                <p className="card--text">{props.data.title}</p>
                <p className="card--price"><span>From ${props.data.price}</span> / person</p>
            </div>

    )
}



// {props.data.situation && <h5 className='card--situation'>{props.data.situation}</h5>}
