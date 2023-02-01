import { useState } from "react";
import "./App.css";
import { Children } from "./Children";

const GuestList = (): JSX.Element => {
	const [name, setName] = useState("");
	const [list, setList] = useState<string[]>([]);
	const handleClick = () => {
		const newList = list.slice();
		setList([...newList, name]);
		setName("");
	};
	return (
		<>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<button type="submit" onClick={handleClick}>
				Add
			</button>
			<div>
				{list.map((inv) => (
					<p>{inv}</p>
				))}
			</div>
		</>
	);
};
function App() {
	return (
		<div className="App">
			<Children k={2} name="Jack">
				zzzzzzzz
			</Children>
			<div>
				<GuestList />
			</div>
		</div>
	);
}

export default App;
