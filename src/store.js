
import { legacy_createStore as createStore} from "redux";
import rootreducers from "./redux/reducers/main";


const store = createStore(
    rootreducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
