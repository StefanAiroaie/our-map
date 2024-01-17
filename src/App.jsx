
import './App.css'
import CarList from './components/carList/CarList'
import cars from "./data/cars"

function App() {

  console.log(cars);

  return (
    <>
      <CarList cars={cars} />
 
    </>
  )
}

export default App
