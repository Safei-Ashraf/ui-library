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
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	return (
		<>
			<input type="text" onChange={onChange} value={name} />
			<button type="submit" onClick={handleClick}>
				Add
			</button>
			<ul>
				{list.map((inv) => (
					<li key={inv}>{inv}</li>
				))}
			</ul>
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
