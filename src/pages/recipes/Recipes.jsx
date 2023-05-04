import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaThumbsUp } from "react-icons/fa";

const Recipes = () => {
  const [isFavourite, setIsFavourite] = useState(true);
  const { id } = useParams();
  const handleFavourite = () =>{
    toast("The recipe is your favorite");
    setIsFavourite(false)
  }
  const allData = useLoaderData();
  const singleData = allData.find((item) => item.id == id);
  console.log(singleData)
  return (
    <div className="container my-5 d-flex flex-column flex-md-row align-items-center gap-md-4 gap-0">
      <Card className="w-100">
        <Card.Img variant="top" src={singleData.chef_img} />
        <Card.Body>
          <Card.Title>{singleData.chef_name}</Card.Title>
          <Card.Text>
            <p className="p-0 m-0">Experience: {singleData.experience}</p>
            <p className="pt-1 m-0">Recipes: {singleData.num_recipes}</p>
            <div className="d-flex align-item-center gap-1">
            <p>Likes: {singleData.likes}</p> 
            <FaThumbsUp className="text-danger" style={{margin:"2px"}}></FaThumbsUp>
            </div>
          </Card.Text>
          <Button variant="danger">Recipe Info</Button>
        </Card.Body>
      </Card>
      <div>
        <Row className="border w-100 fw-bold p-1 align-items-center">
          <Col>
            <h2 className="text-center">Recipes Info</h2>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              onClick={handleFavourite}
              disabled={!isFavourite}
            >
              {isFavourite ? "Add to Favorites" : "Favorited"}
            </Button>
            <ToastContainer />
          </Col>
        </Row>
        {singleData.recipes.map((item) => (
          <Row className="w-100 border">
            <Col
              md={2}
              className="w-100 h-100 text-center bg-danger pt-2 text-white"
            >
              <p className="fw-bold fs-5 w-100">{item.name}</p>
            </Col>
            <Col md={4}>
              <p className="fw-bold">Ingredients:</p>
              {item.ingredients.map((ingredients) => (
                <li>{ingredients}</li>
              ))}
            </Col>
            <Col md={6}>
              <p className="fw-bold">Instruction:</p>
              {item.instructions.map((ins) => (
                <li>{ins}</li>
              ))}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
