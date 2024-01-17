import CarIthem from "../carIthem/CarIthem";
import { v4 as uuidv4 } from "uuid"



const CarList = ({ cars }) => {

    return (
        <>

            {cars.map((car, index) => {
                return (
                    <div key={index}>
                        <CarIthem
                            key={uuidv4()}
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            produktionsjahr={car.produktionsjahr}
                            ps={car.ps}
                        />
                    </div>
                )
            })}

        </>);
}

export default CarList;