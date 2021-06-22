
import React from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';

const Menu = () => {
  return (
    <ListGroup className="my-3">
      <ListGroupItem  tag="a" href="/" >Home</ListGroupItem>
      <ListGroupItem tag="a" href="/Add Student">Add Student</ListGroupItem>
      <ListGroupItem tag="a" href="/View Student">View Student</ListGroupItem>
      <ListGroupItem tag="a" href="/About">About</ListGroupItem>
      <ListGroupItem tag="a" href="#">Contact</ListGroupItem>
    </ListGroup>
  );
}
export default Menu;