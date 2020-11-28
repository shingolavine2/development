import React from 'react';
import ListItem from './ListItem.jsx';
import ViewItem from './ViewItem.jsx';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';


export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        type: "All",
        coolness: "All",
        direction: "Ascending",
        view: [],
        total: 0,
        numitems: 0
      };
  }
    onSelectFilterType = event => {
    this.setState({
      type: event
    })
  };
    onSelectFilterDirection = event => {
    this.setState({
      direction: event
    })
  };
    onSelectFilterCoolness = event => {
    this.setState({
      coolness: event
    })
  };
   matchesFilterType = item => {
  // all items should be shown when no filter is selected
    if(this.state.type === "All") { 
      return true
    } else if (this.state.type === item.type) {
      return true
    } else {
      return false
    }
  };
    matchesFilterCoolness = item => {
  // all items should be shown when no filter is selected
    if(this.state.coolness === "All") { 
      return true
    } else if (this.state.coolness === item.coolness) {
      return true
    } else {
      return false
    }
  };
  // { key: 1, name: "New Zealand DA Class Locomotive", class: "DA", type: "Diesel", coolness: "Not Cool", power: 1060, img: "https://imgur.com/OpjpKs2.jpg", price: 3.5}
  addToView = (item, id) => {
    let newitem = {key: id, name: item.name, class: item.class, type: item.type, coolness: item.coolness, power: item.power, img: item.img, price: item.price};
    this.setState(state => {
      const view = state.view.concat(newitem);
 
      return {
        view
      };
    });
    this.setState({
      total: this.state.total + item.price
    });
    this.setState({
      numitems: this.state.numitems + 1
    });
  };
    removeFromView = keyitem => {
    this.setState(state => {
      const view = state.view.filter(item => item.key !== keyitem.key);
 
      return {
        view,
      };
    });
    this.setState({
      total: this.state.total - keyitem.price
    });
    this.setState({
      numitems: this.state.numitems - 1
    });
  };
  render() {
     const trainList = this.props.items;
     let listItems = trainList.filter(this.matchesFilterType);
     let listItemsTwo = listItems.filter(this.matchesFilterCoolness);
     if (this.state.direction === "Ascending") {
      listItemsTwo.sort((a, b) => (a.power > b.power) ? 1 : -1);
     }
     else {
      listItemsTwo.sort((a, b) => (a.power > b.power) ? 1 : -1);
      listItemsTwo.reverse();
     }
     const finalItems = listItemsTwo.map((item) =>
      <ListItem addToView={this.addToView} item={item} />
      );
     const viewItems = this.state.view.map((item) =>
      <ViewItem removeFromView={this.removeFromView} item={item} />
      );
    return (
      <div>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Active Filters</Card.Title>
              <Card.Text>
                <p>Type: {this.state.type}</p>
                <p>Coolness: {this.state.coolness}</p>
                <p>Sort Direction: {this.state.direction}</p>
                <Nav className="flex-column">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterType}>All</Dropdown.Item>
              <Dropdown.Item eventKey="Diesel" onSelect={this.onSelectFilterType}>Diesel</Dropdown.Item>
              <Dropdown.Item eventKey="Electric" onSelect={this.onSelectFilterType}>Electric</Dropdown.Item>
              <Dropdown.Item eventKey="Steam" onSelect={this.onSelectFilterType}>Steam</Dropdown.Item>
              <Dropdown.Item eventKey="Experimental" onSelect={this.onSelectFilterType}>Experimental</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Coolness
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterCoolness}>All</Dropdown.Item>
              <Dropdown.Item eventKey="Not Cool" onSelect={this.onSelectFilterCoolness}>Not Cool</Dropdown.Item>
              <Dropdown.Item eventKey="Cool" onSelect={this.onSelectFilterCoolness}>Cool</Dropdown.Item>
              <Dropdown.Item eventKey="Awesome" onSelect={this.onSelectFilterCoolness}>Awesome</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By Power
            </Dropdown.Toggle>
          <Dropdown.Menu>
              <Dropdown.Item eventKey="Ascending" onSelect={this.onSelectFilterDirection}>Ascending</Dropdown.Item>
              <Dropdown.Item eventKey="Descending" onSelect={this.onSelectFilterDirection}>Descending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </Nav>
              </Card.Text>
            </Card.Body>
          </Card>
              {viewItems}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Total of Cart</Card.Title>
              <p><img src="https://imgur.com/E19gY7y.png" className="img2" /></p>
              <Card.Text>
                <p>Number of Items: {this.state.numitems}</p>
                <p>Total: ${this.state.total}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
        
        <hr />
        </Row>
        <Row>
          {finalItems}
        </Row>
      </div>
    );
  }
}