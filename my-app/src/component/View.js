import React from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
function View(props) {

    const { ids } = useParams();

    console.log('ids', ids)

    const item = props.document.filter((doc) => doc.id == ids)

    let { id, title, description, phone, city } = item[0];
    
    return (
        // <div>View</div>
        <div className="container py-4">
            <Link className="btn btn-primary" to="/userd">
                back to Home
            </Link>
            <h1 className="display-4">item Id: {ids}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">title name: {title}</li>
                <li className="list-group-item">description: {description}</li>
                <li className="list-group-item">phone: {phone}</li>
                <li className="list-group-item">city: {city}</li>

            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(View)