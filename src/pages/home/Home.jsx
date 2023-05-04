import React from "react";
import chep1 from "../../assets/chef 1.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import menu from "../../assets/menu.png";
import cook from "../../assets/cook.png";
import chef from "../../assets/chef.png";
import food from "../../assets/food.png";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const alldata = useLoaderData();
  return (
    <div>
      {/* ---Banner Section ------ */}
      <Container className="bg-light">
        <div className="d-flex flex-column align-items-center flex-md-row gap-2 gap-md-0 rounded">
          <div className="p-3">
            <h3>
              Food that Brings People Together
              <br /> Discover Our Recipes Today
            </h3>
            <p>
              In addition to recipes, CooksCantina also features a shop where
              visitors can purchase high-quality ingredients and kitchen tools
              to make their own authentic Italian meals at home
            </p>
            <p>
              Whether you're a seasoned cook or a beginner, CooksCantina is the
              perfect destination for anyone
            </p>
            <Button variant="danger" className="me-2">
              Let's Cook
            </Button>
            <Button variant="outline-danger">Explore More</Button>
          </div>
          <div>
            <img src={chep1} alt="" className="img-fluid h-100 w-100 rounded" />
          </div>
        </div>
      </Container>

      {/* ----Chef info seciton ----*/}

      <Container>
        <Row xs={1} md={2} className="g-4 mt-5 mb-5">
          {alldata.map((data) => (
            <Col key={data.id}>
              <Card className="h-100">
                <LazyLoad height={350}>
                  <Card.Img
                    variant="top"
                    src={data.chef_img}
                    className="h-100 w-100"
                  />
                </LazyLoad>
                <Card.Body>
                  <Card.Title>{data.chef_name}</Card.Title>
                  <p className="p-0 m-0">Experience: {data.experience}</p>

                  <p className="m-0">recipes: {data.num_recipes}</p>
                  <p className="m-1">
                    likes: {data.likes}{" "}
                    <FaThumbsUp className="text-danger mb-2"></FaThumbsUp>
                  </p>
                  <Link to={`/recipe/${data.id}`}>
                    <button className="btn btn-danger">Show recipe</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/*------ Feature Section ------*/}

        <div>
          <h3 className="text-center fw-bold">
            Get a Many of Interesting Feature
          </h3>
          <p className="text-center">
            Indulge your taste buds with our diverse collection of delicious and
            easy-to-follow recipes all crafted with fresh and wholesome
            ingredients to satisfy every craving
          </p>
          <Row className="m-2 mb-5">
            <Col md={3} className="card px-3 py-2 m">
              <img
                src={menu}
                alt=""
                height={"70px"}
                width={"70px"}
                className="mx-auto"
              />
              <h5 className="text-center">Menu Variations</h5>
              <p className="text-center">
                Our menu offers diverse, high-quality dishes to suit all tastes,
                from classic favorites to unique and innovative offerings.
              </p>
            </Col>
            <Col md={3} className="card px-3 py-2">
              <img
                src={cook}
                alt=""
                height={"70px"}
                width={"70px"}
                className="mx-auto text-danger"
              />
              <h5 className="text-center">Cooking</h5>
              <p className="text-center">
                Our skilled chefs use only the freshest, highest-quality
                ingredients to create delicious and unforgettable dishes for
                your dining pleasure
              </p>
            </Col>
            <Col md={3} className="card px-3 py-2">
              <img
                src={chef}
                alt=""
                height={"70px"}
                width={"70px"}
                className="mx-auto"
              />
              <h5 className="text-center">Best Chef</h5>
              <p className="text-center">
                Our highly-trained and experienced chef brings a passion for
                culinary creativity and an unwavering commitment to quality to
                every dish.
              </p>
            </Col>
            <Col md={3} className="card px-3 py-2">
              <img
                src={food}
                alt=""
                height={"70px"}
                width={"70px"}
                className="mx-auto"
              />
              <h5 className="text-center">FastFood</h5>
              <p className="text-center">
                Our food is expertly prepared with care and attention, using
                only the finest ingredients for exceptional flavor and
                presentation.
              </p>
            </Col>
          </Row>
        </div>

        {/* Food Gallery section */}
        
        <div className="mb-5">
          <h3 className="text-center fw-bold">Gallery of Our Food & Cook</h3>
          <p className="text-center">
            "CooksCantina" A virtual treasure trove of gastronomic wonders,
            uncovering the most exquisite recipes and flavors from around the
            world.
          </p>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={g1}
                alt="First slide"
                height={"450px"}
              />
              <Carousel.Caption>
                <h3>Osso Buco</h3>
                <p>
                  A Milanese specialty consisting of braised veal shanks served
                  with gremolata, a mixture of lemon zest, garlic, and parsley.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={g2}
                alt="Second slide"
                height={"450px"}
              />

              <Carousel.Caption>
                <h3>Risotto alla Milanese </h3>
                <p>
                  A creamy rice dish flavored with saffron, onions, and Parmesan
                  cheese.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={g3}
                alt="Second slide"
                height={"450px"}
              />

              <Carousel.Caption>
                <h3>Spaghetti Carbonara </h3>
                <p>
                  A pasta dish made with spaghetti, eggs, Pecorino Romano
                  cheese, pancetta, and black pepper.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={g4}
                alt="Third slide"
                height={"450px"}
              />

              <Carousel.Caption>
                <h3>Pizza Margherita</h3>
                <p>
                  A classic Neapolitan pizza topped with tomato sauce,
                  mozzarella cheese, and fresh basil.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Home;
