import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalTheme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./store/Store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<GlobalTheme>
			<App />
		</GlobalTheme>
	</Provider>
);

reportWebVitals();
