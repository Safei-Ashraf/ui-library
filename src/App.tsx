import "./App.css";
import Accordion from "./components/Accordion";
function App() {
	const items = [
		{
			id: "1",
			heading: "1st Heading here",
			content: "1st content here 1st content here",
		},
		{
			id: "2",
			heading: "2nd Heading here",
			content: "2nd content here 2nd content here",
		},
		{
			id: "3",
			heading: "3rd Heading here",
			content: "3rd content here 3rd content here",
		},
	];
	return (
		<div className="App">
			<Accordion items={items} />
		</div>
	);
}

export default App;
