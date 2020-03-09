import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['page']
};

const persisitedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persisitedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export const persistor = persistStore(store);
