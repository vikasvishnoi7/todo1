import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import * as actionTypes from '../redux/actionTypes'
import{Link}from'react-router-dom'



function UserD(props) {
    console.log("UserD")
  
    const document = props.document;
    console.log(document)
    console.log(props.document)

 
    return (
        <>
            <Header></Header>
           
            {document.length == 0 ? <h1 className="text-center">OutOfSctockProduct</h1> :
                <div className="container">
                    <div className="py-4">
                        <h1>Document Table</h1>
                        <button type="button" className="btn btn-danger" onClick={props.DeleteTable}>DeleteTable</button>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">title</th>
                                    <th scope="col">description</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">city</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    document.map((item, i) => (
                                        <tr key={i}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.city}</td>
                                            <td>

                                                <button type="button" className="btn btn-outline-primary">
                                                    <Link to={`/userd/${item.id}`}>View</Link>
                                                </button>
                                                <button type="button" className="btn btn-outline-primary">
                                                    <Link to={`/userd/edit/${item.id}`}>Edit</Link>
                                                </button>
                                                <button type="button" className="btn btn-danger" onClick={() => props.deleteItem(item.id)}>
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            }
        </>
    )

  
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteTable: () => dispatch({type: actionTypes.DELETE_TABLE }),
        deleteItem: (id) => dispatch({type: actionTypes.DELETE_ITEM ,payload:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserD)