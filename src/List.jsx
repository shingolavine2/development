import React from 'react';
import ListItem from './ListItem.jsx';
import Row from 'react-bootstrap/Row';


export default class List extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        test: "test"
      };
  }
  render() {
     const trainList = [
       { name: "New Zealand DA Class Locomotive", class: "DA", type: "Diesel", coolness: "Not_Cool", power: "1060", img: "https://imgur.com/OpjpKs2.jpg"},
       { name: "New Zealand DJ Class Locomotive", class: "DJ", type: "Diesel", coolness: "Not_Cool", power: "672", img: "https://imgur.com/jBOwBaw.jpg"},
       { name: "NZR D Class Steam Locomotive", class: "D", type: "Steam", coolness: "Cool", power: "100", img: "https://imgur.com/ucClmfK.jpg"},
       { name: "NZR RM Class Model-T Railcar", class: "RM", type: "Experimental", coolness: "Awesome", power: "50", img: "https://imgur.com/2IQNcJB.jpg"},
       { name: "NZR RM Class Edison Railcar", class: "RM", type: "Experimental", coolness: "Not_Cool", power: "1", img: "https://imgur.com/Po2a9ds.jpg"},
       { name: "New Zealand EA Class Locomotive", class: "EA", type: "Electric", coolness: "Cool", power: "960", img: "https://imgur.com/fr4QiF5.jpg"},
       { name: "NZR ED Class Locomotive", class: "ED", type: "Electric", coolness: "Not_Cool", power: "670", img: "https://imgur.com/xfpn848.jpg"},
       { name: "New Zealand EW Class Locomotive", class: "EW", type: "Electric", coolness: "Cool", power: "1340", img: "https://imgur.com/4c2uhPQ.jpg"},
       { name: "NZR A Class Steam Locomotive", class: "A", type: "Steam", coolness: "Awesome", power: "101", img: "https://imgur.com/oHM7ZgO.jpg"},
       { name: "New Zealand DE Class Locomotive", class: "DE", type: "Diesel", coolness: "Cool", power: "490", img: "https://imgur.com/qGggvBZ.jpg"},
       { name: "New Zealand DSG Class Locomotive", class: "DSG", type: "Diesel", coolness: "Not_Cool", power: "700", img: "https://imgur.com/vx68mkf.jpg"},
       { name: "New Zealand DSJ Class Locomotive", class: "DSJ", type: "Diesel", coolness: "Cool", power: "350", img: "https://imgur.com/BSrzrc0.jpg"}
      ]

     const listItems = trainList.map((item) =>
      <ListItem item={item} />
      );
    return (
      <div>
        <Row>
          {listItems}
        </Row>
      </div>
    );
  }
}