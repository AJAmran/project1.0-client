import React, { useContext } from "react";
import { AutContext } from "../../provider/AuthProvider";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const { user, loader } = useContext(AutContext);
  const location = useLocation();

  if (loader) {
    return (
      <Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRout;
