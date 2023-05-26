import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalTheme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalTheme>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</GlobalTheme>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
