import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AutContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../utils/firebase/firebase.config";


const auth = getAuth(app)
const gProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const Login = () => {
  const { singIn } = useContext(AutContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState(null);

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value
    const password = form.password.value;
    singIn(email, password)
    .then(result =>{
      const loggedUser = result.user;
      navigate(from, {replace: true})

    })
    .catch(error =>{
      setError(error.message)
    })
    form.reset();
  }

  const googlSinIn = () => {
    signInWithPopup(auth, gProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, {replace: true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const logdedUser = result.user;
        navigate(from, {replace: true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mt-5 border border-danger w-25 mx-auto py-4 rounded margin-bottom-log h-100">
      <h3 className="text-center">Loign</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="p-2" name="email" type="email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="p-2"
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <div className="text-center mt-3">
          <button className="btn btn-outline-secondary btn-lg btn-block w-100">
            Loging
          </button>
        </div>
        <p className="mt-1 text-danger">{error}</p>
        <div className="d-flex justify-content-center align-items-center my-3">
          <hr className="w-25" />
          <p className="mx-2 mb-0">or</p>
          <hr className="w-25" />
        </div>
        <button
          onClick={googlSinIn}
          className="btn btn-outline-danger btn-lg btn-block w-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 533.5 544.3"
            width="20px"
            height="20px"
          >
            <path
              fill="#EA4335"
              d="M81.8 272.1c0-16.8 4.1-32.6 11.2-46.4v-55.8h-55.8c-16.4 30.4-25.9 65.5-25.9 103.5 0 38 9.5 73.1 25.9 103.5l41.6-32.2c-7-13.8-11.2-29.6-11.2-46.4z"
            />
            <path
              fill="#4285F4"
              d="M498.2 272.1c0-25.7-2.2-51-6.5-75.8H267.5v144.7h117.6c-4.8 25.3-18.7 46.9-38.1 61.2l58.4 45.2c33.8-31.2 53-76.9 53-130.3z"
            />
            <path
              fill="#FBBC05"
              d="M261.7 516.4c48.1 0 88.2-15.8 117.6-43.1l-58.4-45.2c-16.3 9.5-35.5 15.1-59.2 15.1-45.5 0-84.1-30.9-97.7-72.4l-58.4 45.2c31.8 44.5 83.5 73.4 143.1 73.4z"
            />
            <path
              fill="#34A853"
              d="M164 311.1c-14.2-17.6-22-39.7-22-63.6s7.8-46 22-63.6l-41.6-32.2c-25.3 31.7-40.4 71.2-40.4 115.8s15.1 84.1 40.4 115.8l41.6-32.2z"
            />
            <path fill="none" d="M0 0h533.5v544.3H0z" />
          </svg>
          Sign in with Google
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="btn btn-outline-dark btn-lg btn-block w-100 mt-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-github me-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 0 0-2.52 15.59c.39.07.53-.17.53-.38v-1.32c-2.17.47-2.63-.53-2.63-.53-.36-.93-.89-1.18-.89-1.18-.73-.49.06-.48.06-.48.81.06 1.24.83 1.24.83.72 1.23 1.89.87 2.35.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.83-2.14-.08-.2-.36-1.02.07-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.43 1.1.15 1.92.07 2.12.52.56.83 1.27.83 2.14 0 3.07-1.87 3.75-3.66 3.94.29.24.54.73.54 1.48v2.19c0 .21.14.46.54.38A8 8 0 0 0 8 0z"
            />
          </svg>
          Sign in with GitHub
        </button>
        <div className="d-flex justify-content-center align-items-center my-3">
          <hr className="w-25" />
          <p className="mx-2 mb-0">or</p>
          <hr className="w-25" />
        </div>
        <p className="text-center">
          Don't Have a Account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
