import React from "react";
import { useParams } from "react-router-dom";

const SignIn = () => {
  const { name } = useParams();
  return (
    <div>
      <h1 className="title is-1">SIGN IN page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
        </div>
        <div className="message-body">
          Sign In Here
        </div>
      </article>
    </div>
  );
};

export default SignIn;
