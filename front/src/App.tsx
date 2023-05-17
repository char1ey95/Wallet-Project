import { MainForm } from "./common/form";
import { Assets } from "./pages/assets";
import { Home } from "./pages/home";

const App = () => {
	return (
		<>
			<MainForm>
				{/* <Assets /> */}
				<Home />
			</MainForm>
		</>
	);
};

export default App;
