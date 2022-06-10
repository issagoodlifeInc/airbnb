import swimmer from '../images/swimmer.png';
import star from '../images/star.png';

export default function Card() {
    return(
        <section className="cards">
            <div className="card">
            <h5 className='card--situation'>Sold Out</h5>
            <img src={swimmer} alt="Swimmer"/>
            <p className="card--stars"> 
            <img src={star} alt="star"/>
            5.0 <span className='no_stars'>(6) • USA </span></p>
            <p className="card--text">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span>From $136</span> / person</p>
            </div>

            <div className="card">
            <img src={swimmer} alt="Swimmer"/>
            <p className="card--stars">
            <img src={star} alt="star" />
            5.0 <span className='no_stars' >(6) • USA </span></p>
            <p className="card--text">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span>From $136</span> / person</p>
            </div>
        </section>
            
    )
}