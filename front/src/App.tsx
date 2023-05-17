import { MainForm } from "./common/form";
import { Step_1, Step_2, Step_3, Step_4 } from "./pages";
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
