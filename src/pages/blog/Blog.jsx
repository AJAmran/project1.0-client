import React from "react";
import ReactDOM from "react-dom";
import bgbanner from "../../assets/blogBanner.jpg";
import Pdf from "react-to-pdf";
import { Container } from "react-bootstrap";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage: `url(${bgbanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="container pt-4">
          <h4 className="fw-bold pt-5 mt-5">
            This is where <br /> I write about things that interest me. Check
            back often for new posts!{" "}
          </h4>
          <p>"Our latest blog post discusses the top trends in digital marketing for 2021, including the importance of video content and personalized marketing strategies."</p>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                className="btn btn-danger fw-semibold fs-6"
                onClick={toPdf}
              >
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </Container>

      <div ref={ref} className="mt-5">
        <div className="container py-4">
          <h5 className="bg-danger text-white p-2">
            What is the differences between uncontrolled and controlled
            components?
          </h5>
          <p className="bg-white px-2">
            The main difference between controlled and uncontrolled components
            in React is that controlled components receive their data from the
            parent component and notify the parent component when the data
            changes, while uncontrolled components manage their own state
            internally and are not easily manipulated or validated. Controlled
            components provide a more predictable and controlled user interface,
            while uncontrolled components are easier to use and require less
            code.
          </p>
        </div>
        <div className="container py-4 mt-0 pt-0">
          <h5 className="bg-danger text-white p-2">
            How to validate React props using PropTypes?
          </h5>
          <p className="bg-white p-0 m-0 fw-semibold">
            To validate React props using PropTypes, you need to follow these
            steps:
          </p>
          <ul>
            <li>Import the PropTypes library from the 'prop-types' package.</li>
            <li>Define your component and its props as usual.</li>
            <li>
              Set the 'propTypes' property on your component to an object
              containing the expected prop types and any additional validators.
            </li>
            <li>
              Optionally, we can also define default values for your props using
              the 'defaultProps' property.
            </li>
          </ul>
        </div>
        <div className="container py-4 mt-0 pt-0">
          <h5 className="bg-danger text-white p-2">
            What is the difference between nodejs and express js?
          </h5>
          <p className="bg-white p-0 m-0 fw-semibold">
            Difference Between nodejs and Express js
          </p>
          <ul>
            <li>
              Node.js is a runtime environment, while Express.js is a web
              application framework built on top of Node.js.
            </li>
            <li>
              Node.js can be used with any web application framework, while
              Express.js is specifically designed for use with Node.js.
            </li>
            <li>
              Node.js is lower-level and more flexible than Express.js, allowing
              you to build custom solutions for your specific needs, while
              Express.js provides a higher-level abstraction for building web
              applications quickly and easily.
            </li>
          </ul>
        </div>
        <div className="container py-4 mt-0 pt-0">
          <h5 className="bg-danger text-white p-2">
            What is a custom hook, and why will you create a custom hook?
          </h5>
          <p className="bg-white m-0 p-0">
            A custom hook is a JavaScript function that starts with the prefix
            'use' and allows us to extract and reuse logic between components
            in React. We might create a custom hook when we have a set of
            functionality that is used across multiple components and we want
            to encapsulate that functionality in a single reusable hook. Custom
            hooks help to avoid code duplication and make our code more modular
            and easier to maintain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
