import PropTypes from "prop-types";

function CarCard(props) {
    const {cars} = props;
    const url = "http://localhost:8000/api/cars";

    const rent = async() =>{
        const response = await fetch(url+"/"+ cars.id + "/rent",{
            method:"POST",
            headers: {
                "Accept": "application/json"
            }

        });
        if (response.ok) {
            alert("Sikeres foglalás!");
        }else{
            const data = await response.json();
            alert(data.message);
        }
    }

    return ( <div className="col card">
        <div className="card-body">
        <h2>{cars.license_plate_number}</h2>
        <p>Márka: {cars.brand}</p>
        <p>Modell: {cars.model}</p>
        <p>Napidíj: {cars.daily_cost} Forint</p>
        <img className="img-fluid" src={"carimage/"+ cars.brand.toLowerCase()+"_"+cars.model.toLowerCase()+".png"} alt={"carimage/"+ cars.brand.toLowerCase()+"_"+cars.model.toLowerCase()} />
        <button className="btn btn-primary" onClick={() => rent()}>Kölcsönzés</button>
        </div>
    </div>);
}

CarCard.propTypes = {
    cars: PropTypes.object.isRequired
}

export default CarCard;