import "./register.scss"
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
          <div className="left">
            <h1>Mayan Social.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa dignissimos, 
              ducimus debitis animi natus? Ea, molestias. Perferendis vitae distinctio nobis rem 
              commodi. Eveniet eligendi enim, dignissimos minus fugit iusto?
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
          </div>

          <div className="right">
            <h1>Register</h1>
            <form action="">
              <input type="text" placeholder="Username"/>
              <input type="text" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="password" placeholder="Name"/>
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Register
