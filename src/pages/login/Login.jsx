import "./login.scss"
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Mayan's World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa dignissimos, 
              ducimus debitis animi natus? Ea, molestias. Perferendis vitae distinctio nobis rem 
              commodi. Eveniet eligendi enim, dignissimos minus fugit iusto?
            </p>
            <span>Don't have an account?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login
