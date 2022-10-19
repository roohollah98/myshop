import {combineReducers} from 'redux'
import basketReducer from './basket/basketReducer'
import ProductReducer from "./product/productReducer";
const rootReducer=combineReducers({basket:basketReducer,products:ProductReducer})

export default rootReducer;