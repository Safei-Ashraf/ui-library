import "./App.css";
import Button from "./components/Button";
function App() {
	return (
		<div className="App">
			<Button
				variant="filled"
				color="primary"
				size="sm"
				icon={true}
			></Button>
		</div>
	);
}

export default App;
