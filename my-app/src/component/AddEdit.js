import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../redux/actionTypes'
import { useNavigate, useParams,Link } from 'react-router-dom';

function AddEdit(props) {

    const { ids } = useParams();
    console.log('ids', ids)
    const itemid = props.document.filter((doc) => doc.id === ids)

    let navigate = useNavigate()
    const [item, setitem] = useState({
        id: "",
        title: "",
        description: "",
        phone: "",
        city: ""
    });
    
    let { id, title, description, phone, city } = item;
    const onInputChange = e => {
        setitem({ ...item, [e.target.name]: e.target.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        props.addDococument(item,id)
        navigate("/userd");
    };
    useEffect(()=>{
        console.log("useEffect")
        if (itemid.length != 0) {
            console.log("1")
            setitem(itemid[0])
        }
    },[])

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <Link className="btn btn-primary" to="/userd">
                    back to Home
                </Link>
                <h2 className="text-center mb-4">AddEdit item</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter id"
                            name="id"
                            value={id}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="description"
                            placeholder="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter phone no"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter city"
                            name="city"
                            value={city}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add item</button>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return state

}



const mapDispatchToProps = (dispatch) => {
    return {
        addDococument: (item,id) => dispatch({
            type: actionTypes.ADD_DOCUMENT,
            payload: {
                item,
                id
            }
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEdit)