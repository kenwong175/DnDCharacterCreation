import React from 'react'
import { newSignUp, SignIn, SignOut} from '../util/login'

function Login({query,changeHandler}) {
    return (
        <div>
            <p>Hello, Please sign in.</p>
            <input name="email" onChange={changeHandler}/>
            <input name="password" onChange={changeHandler}/>
            <button onClick={()=>newSignUp(query.email,query.password)}>Sign up</button>
            <button onClick={()=>SignIn(query.email,query.password)}>Sign in</button>
            <button onClick={SignOut}>Sign Out</button>
            <button>Check</button>
        </div>
    )
}

export default Login
