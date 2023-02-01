import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Children } from "./Children";

const GuestList = (): JSX.Element => {
	const [name, setName] = useState("");
	const [list, setList] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleClick = () => {
		const newList = list.slice();
		setList([...newList, name]);
		setName("");
	};
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
		console.log(event);
		console.log("dragged");
	};
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
		return;
	});
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					onChange={onChange}
					value={name}
					ref={inputRef}
				/>
				<button type="submit" onClick={handleClick}>
					Add
				</button>
			</form>
			<ul>
				{list.map((inv) => (
					<li key={inv}>{inv}</li>
				))}
			</ul>
			<div draggable onDragStart={onDrag}>
				Drag this one
			</div>
		</>
	);
};
function App() {
	return (
		<div className="App">
			<Children k={2} name="Jack">
				C:\Users\Safei\Desktop\tic-tac\node_modules\@types\react\index.d.ts
			</Children>
			<div>
				<GuestList />
			</div>
		</div>
	);
}

export default App;
