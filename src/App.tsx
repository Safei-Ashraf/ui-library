import "./App.css";
import Button from "./components/Button";
// import Button from "./components/Button";
// import StarIcon from "./components/StarIcon";
function App() {
	return (
		<div className="App">
			{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
			{/* <Button className="">Click Me</Button> */}
			{/* <StarIcon size="sm" color="red" /> */}

			<Button variant="filled" color="primary" size="lg" isDisabled>
				Click me
			</Button>
		</div>
	);
}

export default App;
