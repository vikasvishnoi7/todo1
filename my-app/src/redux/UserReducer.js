import * as actionTypes from './actionTypes'

let initialState = {
    name: null,
    email: null,
    password: null,
    document: []
}


function UserReducer(state = initialState, action) {
    console.log(action.payload);
    console.log(state);
    switch (action.type) {

        case actionTypes.SET_USER:

            let newObject = {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
            console.log(newObject)
            return newObject


        case actionTypes.REMOVE_USER:

            return {
                ...state,
                name: null,
                email: null,
                password: null,
                document:[]
            }

        case actionTypes.ADD_DOCUMENT:
        
            let custom = state.document.filter((doc) => doc.id != action.payload.id)
            
            let obj = {
                ...state,
                document: [...custom, action.payload.item]
            }
            obj.document.sort((a, b) => (a.id - b.id) )
           
            return obj

        case actionTypes.DELETE_TABLE:
            let obj1 = {
                ...state,
                document: []
            }
            return obj1

        case actionTypes.DELETE_ITEM:
            
            console.log("action.payload", action.payload)
            return {
                ...state,
                document: state.document.filter((doc) => doc.id != action.payload)
            }
        default:
            return state;
    }

}

export default UserReducer;
