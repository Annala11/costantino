import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

// import { mySaga } from './sagas/sagas';
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware())); // вставить в аргументы мидлварки sagaMiddleware
// sagaMiddleware.run();


export default store;


