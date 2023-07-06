import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import mac9 from "./macbook/mac9.jpg"
import mac12 from "./macbook/mac12.jpg"
import mac11 from "./macbook/mac11.jpg"

export function Connections(){
    return(
        <div class="connection">
            <h1>Our Connections Work Satisfaction </h1>
            <CardGroup style={{position:'relative', top:'700px',left:'120px',width:"1200px"}}>
      <Card style={{margin:"10px", border:'1px solid black', borderradius:"10px"}}>
        <Card.Img variant="top" src={mac9}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin:"10px", border:'1px solid black', borderradius:"10px"}}>
        <Card.Img variant="top" src={mac12} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{margin:"10px", border:'1px solid black', borderradius:"10px"}}>
        <Card.Img variant="top" src={mac11} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </div>
    )
}