import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../src/reducers/index";
import { createLogger } from "redux-logger";

const persistConfig = {
  key: "redux-taskkkkk",
  storage: AsyncStorage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
let persistor = persistStore(store);
export { store, persistor };
