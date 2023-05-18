import { MainForm } from "./common/form";
import { Loading, LoadingCircle } from "./common/loading";
import { AppRouter } from "./routes";


const App = () => {
	return (
		<>
			<MainForm>
				{/* <AppRouter /> */}
				<LoadingCircle />
			</MainForm>
		</>
	);
};

export default App;
