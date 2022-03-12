import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../redux/actionTypes'
import { Navigate, Link } from "react-router-dom";




function Header(props) {
    console.log("Header")

    return (
        < nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div className="container">
                {props.email == undefined ? <Navigate to={'/'} replace={true} /> : <></>}
                <h1>User Logged in  {props.email}</h1>
              

                <button type="button" className="btn btn-danger" onClick={props.logout}>LogOut</button>


                <Link className="btn btn-outline-light" to="/userd/add">Add doc</Link>
            </div>
        </nav >
    )
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            return dispatch({ type: actionTypes.REMOVE_USER })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

