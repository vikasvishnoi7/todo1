import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as actionTypes from '../redux/actionTypes'
import './Register.css'

function Register(props) {
  console.log("Register")

  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);

  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);

  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);

  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      setEmail("");
      setName('');
      setPassword('')

    } else {
      props.signUp(name, email, password);
      navigate('/login');
    }
  };

  return (
    <div className='login'>


      <h1 className='user_reg'>User Registration</h1>



      {error == true ? <h1>Please enter all the fields</h1> : <></>}

      <form className="login__form">
     
        
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />

        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />

        <button onClick={handleSubmit} className="btn1" type="submit">
          Submit
        </button>
      </form>

    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (name, email, password) => dispatch({
      type: actionTypes.SET_USER,
      payload: {
        name, email, password
      }
    })
  }
}

export default connect(null, mapDispatchToProps)(Register)