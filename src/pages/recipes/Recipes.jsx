import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Recipes = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const singleData = allData.find((item) => item.id == id);
  console.log(singleData.chef_img, singleData);
  return (
    <div className="container my-5 d-flex flex-column flex-md-row align-items-center gap-4">
            <Card style={{ width: "60rem",}}>
              <Card.Img variant="top" src={singleData.chef_img} />
              <Card.Body>
                <Card.Title>{singleData.chef_name}</Card.Title>
                <Card.Text>
                 <p className="p-0 m-0">Experience: {singleData.experience}</p>
                 <p>Recipes: {singleData.num_recipes}</p>
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
               <div>
               {
                    singleData.recipes.map(item =><Row className="w-100 border">
                        <Col md={2} className="w-100 h-100 text-center bg-danger pt-2 text-white">
                            <p className="fw-bold fs-5 w-100">{item.name}</p>
                        </Col>
                        <Col md={4}>
                            <p className="fw-bold">Ingredients:</p>
                        {item.ingredients.map(ingredients => <li>{ingredients}</li>)}
                        </Col>
                        <Col md={6}>
                            <p className="fw-bold">Instruction:</p>
                        {
                          item.instructions.map(ins => <li>{ins}</li>)  
                        }
                        </Col>
                    </Row>)
         }
               </div>
    </div>
  );
};

export default Recipes;
