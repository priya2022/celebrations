import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'
import { login, logout } from '../../Features/User';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const user = useSelector(state=> state.user.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email,password}))
    // Perform login logic here, such as making an API request
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleLogout= (e)=>{
    e.preventDefault()
    dispatch(logout())
  }

  

  return (
    <>

    {
      !user.email && (
        <div className="LoginBorder">
        <div className="main_container">
          <div className="imgContainer">
          <img src="assets/images/login.png" alt="" className="loginImage"/>
          </div>      
        <Container className="login-container">
    
            <div className="LoginAlign">
          
          <Form >
            <Form.Group>
              <Form.Label className="Login_Label">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter your Email"
                 className="Login_Input"   
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="Login_Label">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                className="Login_Input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {
              !user.email ? (  <Button type="submit" className="LoginButton" onClick={handleSubmit}variant="warning">Login</Button>):(  <Button type="submit" className="LoginButton" onClick={handleLogout} variant="warning">Logout</Button>)
            }
            <b>If not registered please Signup!</b>
            <Link to='/SignUp'>
            <Button type="submit" className="LoginButton" variant="warning">SignUp</Button>
            </Link>

           
            {/* <Button type="submit" className="LoginButton" variant="warning">Login</Button> */}
          </Form>
          </div>
    
        </Container>
        </div>
        </div>
    
      )
    }
       

     


   </>
  );
};

export default Login;
