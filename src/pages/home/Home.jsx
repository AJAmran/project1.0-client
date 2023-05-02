import React from "react";
import Header from "../../component/shared/header/Header";
import Footer from "../../component/shared/footer/Footer";
import chep1 from "../../assets/chef 1.jpg"
import { Button, Container } from "react-bootstrap";

const Home = () => {
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
    </div>
  );
};

export default Home;
