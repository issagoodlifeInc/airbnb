import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


function App() {
  const myData = data.map(data => {
        return(
            <Card
            key={data.id}
            data={data}
            />
        )
    })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards">
      {myData}
      </section>
    </div>
  );
}

export default App;
