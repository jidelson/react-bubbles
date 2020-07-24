import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

const initialLoginFormValues = {
  username: '',
  password: ''    
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);
  const history = useHistory();

  const onInputChange = e => {
    setLoginFormValues({
        ...loginFormValues,
        [e.target.name]: e.target.value
     })
}

  const onLogin = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', loginFormValues)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={onLogin}>
          <label> Username:
            <input 
              id='username'
              name='username'
              type='text'
              value={loginFormValues.username}
              onChange={onInputChange}
            />
          </label>
          <label>Password:
            <input 
              id='password'
              name='password'
              type='text'
              value={loginFormValues.password}
              onChange={onInputChange}
            />
          </label>
          <button>Submit</button>
        </form>
    </>
  );
};

export default Login;
