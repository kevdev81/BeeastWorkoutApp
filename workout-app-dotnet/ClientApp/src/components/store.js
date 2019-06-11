import { createStore, applyMiddleware, compose } from "redux";
import { strengthProfileReducer } from "./actions";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = compose(
//   applyMiddleware(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

// const persist = (strengthProfileConfig, reducer) =>
//   persistReducer({ ...strengthProfileConfig, storage }, reducer);

// const reducers = combineReducers({
//   persistedStore: persist(strengthProfileConfig, strengthProfileReducer)
// });

// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export const persistor = persistStore(store);

// export default store;
