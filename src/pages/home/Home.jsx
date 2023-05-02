import React from "react";
import chep1 from "../../assets/chef 1.jpg"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const alldata = useLoaderData();
    console.log(alldata)
  return (
    <div>
      <Container className="bg-light">
        <div className="d-flex flex-column align-items-center flex-md-row gap-2 gap-md-0 rounded">
          <div className="p-3">
            <h3>
              Food that Brings People Together<br /> Discover Our Recipes Today
            </h3>
            <p>
            In addition to recipes, CooksCantina also features a shop where visitors can purchase high-quality ingredients and kitchen tools to make their own authentic Italian meals at home
            </p>
            <p>
            Whether you're a seasoned cook or a beginner, CooksCantina is the perfect destination for anyone 
            </p>
            <Button variant="danger" className="me-2">Let's Cook</Button>
            <Button variant="outline-danger">Explore More</Button>
          </div>
          <div>
            <img src={chep1} alt="" className="img-fluid h-100 w-100 rounded"/>
          </div>
        </div>
      </Container>
      <Container>
      <Row xs={1} md={2} className="g-4 mt-5 mb-5">
      {alldata.map(data => (
        <Col key={data.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={data.chef_img} className="h-100"/>
            <Card.Body>
              <Card.Title>{data.chef_name}</Card.Title>
              <p>Experience: {data.experience}</p>
              <p>recipes: {data.num_recipes}</p>
              <Link to="/recipe">
              <button className="btn btn-danger">Show recipe</button></Link>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </Container>
    </div>
  );
};

export default Home;
