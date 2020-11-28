import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class ViewItem extends React.Component {
  constructor(props) {
    super(props);
      this.removeItself = this.removeItself.bind(this);
  }

  removeItself() {
    this.props.removeFromView(this.props.item);
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>
          <p><img src={this.props.item.img} className="img" /></p>
          <p>Price: ${this.props.item.price}</p>
          <Button onClick={this.removeItself} variant="danger">Remove From Cart</Button>
        </Card.Body>
      </Card>

    );
  }
}