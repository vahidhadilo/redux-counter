import { createStore } from 'redux';
import reducer from '../redux/counter/counterReducer'

const store = createStore(reducer);

export default store;