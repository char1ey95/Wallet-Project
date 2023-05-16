import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer =
	process.env.NODE_ENV === "production"
		? applyMiddleware(thunk)
		: composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
