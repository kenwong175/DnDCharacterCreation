import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { newSignUp, SignIn} from '../util/login'

function Login({msg,setMsg,query,changeHandler}) {
    return (
        <Container>
            <h1>Home</h1>
            <p className="status">Hello, please sign in to access.</p>
            {msg&&<Alert variant="success">{msg}</Alert>}
            <input className="form-control col-4" placeholder="email address" name="email" onChange={changeHandler}/>
            <input className="form-control col-4 mb-2" type="password" placeholder="password" name="password" onChange={changeHandler}/>
            <button onClick={()=>SignIn(query.email,query.password, setMsg)}>Sign in</button>
            <p className="mt-3">Do not have an account? Sign Up here!</p>
            <button onClick={()=>newSignUp(query.email,query.password)}>Sign up</button>
        </Container>
    )
}

export default Login
