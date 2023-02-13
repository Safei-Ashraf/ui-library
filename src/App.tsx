import "./App.css";
import Button from "./components/Button";
function App() {
	return (
		<div className="App">
			<Button
				variant="filled"
				color="secondary"
				size="lg"
				icon={true}
				iconDirection="right"
			></Button>
		</div>
	);
}

export default App;
