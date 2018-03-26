import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import devTools from 'remote-redux-devtools';
import rootReducers from '../reducers/index';
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

export default function configureStore(initialState) {
    const store = createStore(
        rootReducers,
        initialState,
        compose(
            applyMiddleware(
              thunkMiddleware,
              loggerMiddleware
            ),
            autoRehydrate(),
            devTools()
        )
    )
    persistStore(store, {storage: AsyncStorage});
    return store;
}
