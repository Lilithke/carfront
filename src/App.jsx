import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import CarForm from "./CarForm";

function App() {
  const [cars, setCars] = useState([]);
  const url = "http://localhost:8000/api/cars";
  const readAllCars = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    setCars(data.data);
  }

  useEffect(() => {
    readAllCars();
  }, []);
  return (<>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#newcar">Új autó felvétele</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://petrik.hu/">Petrik honlap</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
          <h1>Petrik Autókölcsönző</h1>
      </div>
    </header>
    <main className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
       {cars.map(car =><CarCard key={car.id} cars={car}/>)} 
      </div>
      <div className="mt-3" id="newcar">
        <CarForm onSuccess ={readAllCars}/>
      </div>
    </main>
    <footer className="container">
      <p>Készítette: Évi</p>
    </footer>
  </>);
}

export default App;


