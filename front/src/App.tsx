import { MainForm } from "./common/form";
import { AppRouter } from "./routes";


const App = () => {
	return (
		<>
			<MainForm>
				<AppRouter />
			</MainForm>
		</>
	);
};

export default App;
