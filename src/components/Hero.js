import heroImg from "../images/heroimg.png";


export default function Hero() {
    return(
        <div className="hero">
           <img src={heroImg} alt="Hero" className="hero--img" /> 

           <h1 className="hero--title">Online Experiences</h1>
           <p className="hero--text">
           Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
           </p>
        </div>
    )
}