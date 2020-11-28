import './App.css';
import List from './List.jsx';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const trainList = [
       { key: 1, name: "New Zealand DA Class Locomotive", class: "DA", type: "Diesel", coolness: "Not Cool", power: 1060, img: "https://imgur.com/OpjpKs2.jpg", price: 3.5},
       { key: 2, name: "New Zealand DJ Class Locomotive", class: "DJ", type: "Diesel", coolness: "Not Cool", power: 672, img: "https://imgur.com/jBOwBaw.jpg", price: 2.5},
       { key: 3, name: "NZR D Class Steam Locomotive", class: "D", type: "Steam", coolness: "Cool", power: 100, img: "https://imgur.com/ucClmfK.jpg", price: 1.5},
       { key: 4, name: "NZR RM Class Model-T Railcar", class: "RM", type: "Experimental", coolness: "Awesome", power: 50, img: "https://imgur.com/2IQNcJB.jpg", price: 4.5},
       { key: 5, name: "NZR RM Class Edison Railcar", class: "RM", type: "Experimental", coolness: "Not Cool", power: 1, img: "https://imgur.com/Po2a9ds.jpg", price: 5.5},
       { key: 6, name: "New Zealand EA Class Locomotive", class: "EA", type: "Electric", coolness: "Cool", power: 960, img: "https://imgur.com/fr4QiF5.jpg", price: 6.5},
       { key: 7, name: "NZR ED Class Locomotive", class: "ED", type: "Electric", coolness: "Not Cool", power: 670, img: "https://imgur.com/xfpn848.jpg", price: 7.5},
       { key: 8, name: "New Zealand EW Class Locomotive", class: "EW", type: "Electric", coolness: "Cool", power: 1340, img: "https://imgur.com/4c2uhPQ.jpg", price: 8.5},
       { key: 9, name: "NZR A Class Steam Locomotive", class: "A", type: "Steam", coolness: "Awesome", power: 101, img: "https://imgur.com/oHM7ZgO.jpg", price: 9.5},
       { key: 10, name: "New Zealand DE Class Locomotive", class: "DE", type: "Diesel", coolness: "Cool", power: 490, img: "https://imgur.com/qGggvBZ.jpg", price: 10.5},
       { key: 11, name: "New Zealand DSG Class Locomotive", class: "DSG", type: "Diesel", coolness: "Not Cool", power: 700, img: "https://imgur.com/vx68mkf.jpg", price: 11.5},
       { key: 12, name: "New Zealand DSJ Class Locomotive", class: "DSJ", type: "Diesel", coolness: "Cool", power: 350, img: "https://imgur.com/BSrzrc0.jpg", price: 12.5}
      ]
  return (
    <Container fluid>
      <List items={trainList} />
    </Container>
  );
}

export default App;

