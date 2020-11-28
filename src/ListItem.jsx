import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        available: 1
      };
      this.makeAvailable = this.makeAvailable.bind(this);
  }
  makeAvailable() {
    this.setState({
      available: this.state.available + 1
    });
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>
          <p><img src={this.props.item.img} className="img" /></p>
          <Card.Text>
            <p>Class: {this.props.item.class}</p>
            <p>Type: {this.props.item.type}</p>
            <p>Coolness: {this.props.item.coolness}</p>
            <p>Power: {this.props.item.power}</p>
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

    );
  }
}
