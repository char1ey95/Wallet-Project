import { MainForm } from "./common/form";
import { Assets } from "./pages/assets";
import { Login } from "./pages/login";
import { SelectedAccount } from "./store/account/account.interface";

const App = () => {
	const account = ["1", "2", "3"];
	const balance: SelectedAccount[] = [{ balance: 50 }, { balance: 50 }, { balance: 50 }];

	const b = [{account:"", balance: 0}]
	const a = balance.map((v, index) => {
		console.log(v, index);
		v.account = account[index];
		return v
	});

	console.log(a)

	return (
		<div style={{ display: "flex" }}>
			<MainForm>
				<Assets />
			</MainForm>
		</div>
	);
};

export default App;
