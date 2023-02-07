import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Button, buttonVariants } from "./components/Button/Button";

function App() {
	return (
		<div className="App">
			<Button variant={buttonVariants.SECONDARY}>Click Me</Button>
		</div>
	);
}

export default App;
