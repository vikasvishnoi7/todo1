import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login(props) {
    console.log("login")
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            // setEmail("");

        } else if (props.email !== email || props.password !== password) {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 2000);
        } else {
            console.log("success")
            navigate('/userd');
        }
    };
    return (
        <div className='login'>

            <h1 className='user_reg'>User Login</h1>

            {error == true ? <h1>Please enter all the fields</h1> : <></>}
            {err == true ? <h1>Please enter validData</h1> : <></>}

            <form className="login__form">


                <label className="label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className="input"
                    value={password} type="password" />

                <button onClick={handleSubmit} className="btn1" type="submit">
                    Submit
                </button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return state
   
}
export default connect(mapStateToProps)(Login)