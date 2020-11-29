import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
      this.addItself = this.addItself.bind(this);
  }
  addItself() {
    this.props.addToView(this.props.item, uuid());
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
            <p>Price: ${this.props.item.price}</p>
          </Card.Text>
          <Button onClick={this.addItself} variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

    );
  }
}